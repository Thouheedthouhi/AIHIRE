import math


# ---------------------------------------------
# AIHire - MediaPipe Feature Extractor
# ---------------------------------------------


class FeatureExtractor:

    # ---------------------------------------------
    # Landmark Indices
    # ---------------------------------------------

    LEFT_EYE = [
        33,
        160,
        158,
        133,
        153,
        144,
    ]

    RIGHT_EYE = [
        362,
        385,
        387,
        263,
        373,
        380,
    ]

    # ---------------------------------------------
    # Distance
    # ---------------------------------------------

    @staticmethod
    def distance(a, b):
        return math.sqrt(
            (a.x - b.x) ** 2
            + (a.y - b.y) ** 2
            + (a.z - b.z) ** 2
        )

    # ---------------------------------------------
    # Eye Aspect Ratio
    # ---------------------------------------------

    @classmethod
    def calculate_ear(cls, landmarks, indices):

        p1 = landmarks[indices[0]]
        p2 = landmarks[indices[1]]
        p3 = landmarks[indices[2]]
        p4 = landmarks[indices[3]]
        p5 = landmarks[indices[4]]
        p6 = landmarks[indices[5]]

        vertical1 = cls.distance(p2, p6)
        vertical2 = cls.distance(p3, p5)
        horizontal = cls.distance(p1, p4)

        if horizontal == 0:
            return 0

        return (
            vertical1 + vertical2
        ) / (2 * horizontal)

    # ---------------------------------------------
    # Blendshape Helper
    # ---------------------------------------------

    @staticmethod
    def get_blendshape_score(
        blendshapes,
        name,
    ):
        if blendshapes is None:
            return 0

        for category in blendshapes:
            if category.category_name == name:
                return category.score

        return 0

    # ---------------------------------------------
    # Face Center
    # ---------------------------------------------

    @staticmethod
    def calculate_face_center(
        landmarks,
    ):
        nose = landmarks[1]

        return {
            "x": nose.x,
            "y": nose.y,
        }

    # ---------------------------------------------
    # Head Pose
    # ---------------------------------------------

        # ---------------------------------------------
    # Head Pose
    # ---------------------------------------------

    @staticmethod
    def calculate_head_pose(matrix):

        if matrix is None:
            return {
                "yaw": 0,
                "pitch": 0,
                "roll": 0,
            }

        # MediaPipe Python returns a 4x4 NumPy matrix
        m = matrix

        yaw = math.degrees(
            math.atan2(
                m[2][0],
                m[2][2],
            )
        )

        pitch = math.degrees(
            math.atan2(
                -m[2][1],
                math.sqrt(
                    m[2][0] ** 2 +
                    m[2][2] ** 2
                ),
            )
        )

        roll = math.degrees(
            math.atan2(
                m[0][1],
                m[1][1],
            )
        )

        return {
            "yaw": yaw,
            "pitch": pitch,
            "roll": roll,
        }

    # ---------------------------------------------
    # Main Feature Extraction
    # ---------------------------------------------
# ---------------------------------------------


    # ---------------------------------------------
    # Main Feature Extraction
    # ---------------------------------------------

    @classmethod
    def extract_features(
        cls,
        landmarks,
        blendshapes,
        matrix,
    ):

        if landmarks is None:
            return None

        left_ear = cls.calculate_ear(
            landmarks,
            cls.LEFT_EYE,
        )

        right_ear = cls.calculate_ear(
            landmarks,
            cls.RIGHT_EYE,
        )

        ear = (
            left_ear + right_ear
        ) / 2

        center = cls.calculate_face_center(
            landmarks
        )

        pose = cls.calculate_head_pose(
            matrix
        )

        left_blink = cls.get_blendshape_score(
            blendshapes,
            "eyeBlinkLeft",
        )

        right_blink = cls.get_blendshape_score(
            blendshapes,
            "eyeBlinkRight",
        )

        smile = (
            cls.get_blendshape_score(
                blendshapes,
                "mouthSmileLeft",
            )
            +
            cls.get_blendshape_score(
                blendshapes,
                "mouthSmileRight",
            )
        ) / 2

        jaw_open = cls.get_blendshape_score(
            blendshapes,
            "jawOpen",
        )

        return {

            "facePresent": True,

            "eyeAspectRatio": ear,

            "leftBlink": left_blink,

            "rightBlink": right_blink,

            "smileScore": smile,

            "jawOpen": jaw_open,

            "headYaw": pose["yaw"],

            "headPitch": pose["pitch"],

            "headRoll": pose["roll"],

            "faceCenterX": center["x"],

            "faceCenterY": center["y"],
        }