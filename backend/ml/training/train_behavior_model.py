from pathlib import Path

import joblib
import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.multioutput import MultiOutputClassifier


# ---------------------------------------------
# Paths
# ---------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

DATASET_PATH = (
    BASE_DIR
    / "dataset"
    / "behavior_dataset.csv"
)

MODEL_PATH = (
    BASE_DIR
    / "models"
    / "behavior_model.pkl"
)

FEATURES_PATH = (
    BASE_DIR
    / "models"
    / "feature_columns.pkl"
)


# ---------------------------------------------
# Load Dataset
# ---------------------------------------------

df = pd.read_csv(DATASET_PATH)

print(f"\nDataset Shape: {df.shape}")

# ---------------------------------------------
# Features
# ---------------------------------------------

FEATURE_COLUMNS = [
    "blinkCount",
    "eyeContact",
    "smilePercentage",
    "speakingPercentage",
    "headMovement",
]

TARGET_COLUMNS = [
    "Engagement",
    "Boredom",
    "Confusion",
    "Frustration",
]

X = df[FEATURE_COLUMNS]

y = df[TARGET_COLUMNS]


# ---------------------------------------------
# Train / Test Split
# ---------------------------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

print(f"Training Samples : {len(X_train)}")
print(f"Testing Samples  : {len(X_test)}")


# ---------------------------------------------
# Train Model
# ---------------------------------------------

model = MultiOutputClassifier(

    RandomForestClassifier(

        n_estimators=300,

        random_state=42,

        n_jobs=-1,

    )

)

print("\nTraining Random Forest...\n")

model.fit(X_train, y_train)

print("Training Complete!\n")


# ---------------------------------------------
# Evaluate
# ---------------------------------------------

predictions = model.predict(X_test)

print("=" * 60)

print("MODEL PERFORMANCE")

print("=" * 60)

for i, target in enumerate(TARGET_COLUMNS):

    accuracy = accuracy_score(

        y_test[target],

        predictions[:, i],

    )

    print(f"\n{target}")

    print(f"Accuracy : {accuracy:.4f}")

    print(

        classification_report(

            y_test[target],

            predictions[:, i],

            zero_division=0,

        )

    )


# ---------------------------------------------
# Save Model
# ---------------------------------------------

joblib.dump(

    model,

    MODEL_PATH,

)

joblib.dump(

    FEATURE_COLUMNS,

    FEATURES_PATH,

)

print("=" * 60)

print("Model Saved Successfully!")

print("=" * 60)

print(f"Model   : {MODEL_PATH}")

print(f"Features: {FEATURES_PATH}")