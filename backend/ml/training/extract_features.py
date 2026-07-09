from pathlib import Path

import pandas as pd

from features.video_processor import VideoProcessor


# ---------------------------------------------
# Paths
# ---------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    BASE_DIR
    / "models"
    / "face_landmarker.task"
)

LABELS_PATH = (
    BASE_DIR
    / "dataset"
    / "DAiSEE"
    / "Labels"
    / "TrainLabels.csv"
)

TRAIN_PATH = (
    BASE_DIR
    / "dataset"
    / "DAiSEE"
    / "DataSet"
    / "Train"
)

OUTPUT_PATH = (
    BASE_DIR
    / "dataset"
    / "behavior_dataset.csv"
)


# ---------------------------------------------
# Load Labels
# ---------------------------------------------

labels = pd.read_csv(LABELS_PATH)

# Remove extra spaces from column names
labels.columns = labels.columns.str.strip()

rows = []

print(f"Found {len(labels)} videos")


# ---------------------------------------------
# Process Videos
# ---------------------------------------------

# Change to labels.iterrows() when running the full dataset
for index, row in labels.iterrows():

    clip = row["ClipID"].replace(".avi", "")

    folder = clip[:6]

    video_path = (
        TRAIN_PATH
        / folder
        / clip
        / f"{clip}.avi"
    )

    if not video_path.exists():
        print(f"❌ Missing: {clip}")
        continue

    print(f"[{index + 1}/10] Processing {clip}")

    # Create a fresh MediaPipe detector for each video
    processor = VideoProcessor(
        model_path=str(MODEL_PATH),
        frame_skip=5,
    )

    try:

        summary = processor.process(
            str(video_path)
        )

        if summary is None:
            print(f"⚠️ No face detected: {clip}")
            continue

    except Exception as e:

        print(f"❌ Failed: {clip}")
        print(e)
        continue

    summary["ClipID"] = clip
    summary["Engagement"] = row["Engagement"]
    summary["Boredom"] = row["Boredom"]
    summary["Confusion"] = row["Confusion"]
    summary["Frustration"] = row["Frustration"]

    rows.append(summary)

    print("✅ Done")


# ---------------------------------------------
# Save Dataset
# ---------------------------------------------

dataset = pd.DataFrame(rows)

dataset.to_csv(
    OUTPUT_PATH,
    index=False,
)

print()
print("====================================")
print("Dataset Generation Complete")
print("====================================")
print()

print(dataset.head())

print()

print("Saved to:")
print(OUTPUT_PATH)

print(f"\nTotal Samples: {len(dataset)}")