from pathlib import Path
import os

import gdown
import joblib
import pandas as pd


class BehaviorService:

    def __init__(self):

        base_dir = Path(__file__).resolve().parents[3]

        model_dir = base_dir / "ml" / "models"
        model_dir.mkdir(parents=True, exist_ok=True)

        self.model_path = model_dir / "behavior_model.pkl"
        self.feature_path = model_dir / "feature_columns.pkl"

        use_gdrive = (
            os.getenv("USE_GDRIVE", "false").lower() == "true"
        )

        if use_gdrive:

            if not self.model_path.exists():

                print("Downloading behavior model from Google Drive...")

                file_id = os.getenv("MODEL_GDRIVE_ID")

                if not file_id:
                    raise RuntimeError(
                        "MODEL_GDRIVE_ID environment variable is not set."
                    )

                gdown.download(
                    id=file_id,
                    output=str(self.model_path),
                    quiet=False,
                )

        else:

            print("Using local behavior model.")

            if not self.model_path.exists():
                raise RuntimeError(
                    f"Local model not found: {self.model_path}"
                )

        if not self.feature_path.exists():
            raise RuntimeError(
                f"Feature columns not found: {self.feature_path}"
            )

        # Lazy loading
        self.model = None
        self.feature_columns = None

        print("BehaviorService initialized.")

    def load_model(self):

        if self.model is None:

            print("Loading behavior model...")

            self.model = joblib.load(self.model_path)
            self.feature_columns = joblib.load(self.feature_path)

            print("Behavior model loaded successfully.")

    def predict(self, features: dict):

        self.load_model()

        df = pd.DataFrame(
            [[features.get(col, 0) for col in self.feature_columns]],
            columns=self.feature_columns,
        )

        prediction = self.model.predict(df)[0]

        return {
            "engagement": int(prediction[0]),
            "boredom": int(prediction[1]),
            "confusion": int(prediction[2]),
            "frustration": int(prediction[3]),
        }


behavior_service = BehaviorService()