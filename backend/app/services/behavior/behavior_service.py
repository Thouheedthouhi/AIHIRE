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

        model_path = model_dir / "behavior_model.pkl"
        feature_path = model_dir / "feature_columns.pkl"

        # Download behavior model if it doesn't exist
        if not model_path.exists():

            print("Downloading behavior model from Google Drive...")

            file_id = os.getenv("MODEL_GDRIVE_ID")

            if not file_id:
                raise RuntimeError(
                    "MODEL_GDRIVE_ID environment variable is not set."
                )

            gdown.download(
                id=file_id,
                output=str(model_path),
                quiet=False,
            )

        # Check feature columns file
        if not feature_path.exists():
            raise RuntimeError(
                "feature_columns.pkl not found. Please add it to the repository."
            )

        print("Loading behavior model...")

        self.model = joblib.load(model_path)
        self.feature_columns = joblib.load(feature_path)

        print("Behavior model loaded successfully.")

    def predict(self, features: dict):

        df = pd.DataFrame(
            [[
                features.get(col, 0)
                for col in self.feature_columns
            ]],
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