from pathlib import Path

from features.video_processor import VideoProcessor

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL = BASE_DIR / "models" / "face_landmarker.task"

VIDEO = (
    BASE_DIR
    / "dataset"
    / "DAiSEE"
    / "DataSet"
    / "Train"
    / "110001"
    / "1100011002"
    / "1100011002.avi"
)
print("Model:", MODEL)
print("Video:", VIDEO)
print("Video Exists:", VIDEO.exists())
print("Model Exists:", MODEL.exists())

processor = VideoProcessor(
    model_path=str(MODEL),
    frame_skip=5,
)

summary = processor.process(str(VIDEO))

print(summary)