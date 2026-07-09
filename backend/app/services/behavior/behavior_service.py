from pathlib import Path

import joblib
import pandas as pd


class BehaviorService:

    def __init__(self):

        base_dir = Path(__file__).resolve().parents[3]

        model_path = (
            base_dir
            / "ml"
            / "models"
            / "behavior_model.pkl"
        )

        feature_path = (
            base_dir
            / "ml"
            / "models"
            / "feature_columns.pkl"
        )

        self.model = joblib.load(model_path)

        self.feature_columns = joblib.load(
            feature_path
        )

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