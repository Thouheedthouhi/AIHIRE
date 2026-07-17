from pathlib import Path
import joblib
import pandas as pd
import gdown


class BehaviorService:

    def __init__(self):

        base_dir = Path(__file__).resolve().parents[3]

        model_dir = base_dir / "ml" / "models"
        model_dir.mkdir(parents=True, exist_ok=True)

        model_path = model_dir / "behavior_model.pkl"
        feature_path = model_dir / "feature_columns.pkl"

        if not model_path.exists():
            print("Downloading behavior model from Google Drive...")

            gdown.download(
                id="1doqu_Gp2_ms_RqppK2lbSB0l0R5sXV1i",
                output=str(model_path),
                quiet=False,
            )

        self.model = joblib.load(model_path)
        self.feature_columns = joblib.load(feature_path)