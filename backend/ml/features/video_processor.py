import cv2
import mediapipe as mp

from mediapipe.tasks.python import vision
from mediapipe.tasks.python import BaseOptions

from features.feature_extractor import FeatureExtractor
from features.behavior_tracker import BehaviorTracker

class VideoProcessor:

    def __init__(
        self,
        model_path,
        frame_skip=5,
    ):

        self.frame_skip = frame_skip

        options = vision.FaceLandmarkerOptions(

            base_options=BaseOptions(
                model_asset_path=model_path
            ),

            running_mode=vision.RunningMode.VIDEO,

            num_faces=1,

            output_face_blendshapes=True,

            output_facial_transformation_matrixes=True,
        )

        self.detector = (
            vision.FaceLandmarker.create_from_options(
                options
            )
        )

    # -----------------------------------------

    def process(
    self,
    video_path,
):

     cap = cv2.VideoCapture(video_path)

     tracker = BehaviorTracker()
 
     frame_index = 0

     while cap.isOpened():

         success, frame = cap.read()

         if not success:
            break

         frame_index += 1

        # Process every 5th frame
         if frame_index % self.frame_skip != 0:
            continue

         rgb = cv2.cvtColor(
            frame,
            cv2.COLOR_BGR2RGB,
        )

         mp_image = mp.Image(
            image_format=mp.ImageFormat.SRGB,
            data=rgb,
        )

         timestamp = frame_index * 33

         
         result = self.detector.detect_for_video(
            mp_image,
            timestamp,
        )

         if len(result.face_landmarks) == 0:
            continue

         landmarks = result.face_landmarks[0]

         blendshapes = (
            result.face_blendshapes[0]
            if result.face_blendshapes
            else None
        )

         matrix = (
            result.facial_transformation_matrixes[0]
            if result.facial_transformation_matrixes
            else None
        )

         features = FeatureExtractor.extract_features(
            landmarks,
            blendshapes,
            matrix,
        )

         tracker.update(features)

     cap.release()

     return tracker.get_summary()