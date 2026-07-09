# ---------------------------------------------
# AIHire Behavior Tracker
# ---------------------------------------------


class BehaviorTracker:

    def __init__(self):
        self.reset()

    # -----------------------------------------

    def reset(self):

        self.totalFrames = 0

        self.blinkCount = 0

        self.previousBlink = False

        self.eyeContactFrames = 0

        self.smileFrames = 0

        self.speakingFrames = 0

        self.headMovement = 0

        self.previousYaw = None
        self.previousPitch = None
        self.previousRoll = None

    # -----------------------------------------

    def update(self, features):

        if features is None:
            return

        self.totalFrames += 1

        # -----------------------------
        # Blink Detection
        # -----------------------------

        blinking = (
            features["leftBlink"] > 0.6
            or features["rightBlink"] > 0.6
        )

        if (
            blinking
            and not self.previousBlink
        ):
            self.blinkCount += 1

        self.previousBlink = blinking

        # -----------------------------
        # Eye Contact
        # -----------------------------

        if (
            abs(features["headYaw"]) < 10
            and abs(features["headPitch"]) < 10
        ):
            self.eyeContactFrames += 1

        # -----------------------------
        # Smile
        # -----------------------------

        if (
            features["smileScore"] > 0.25
        ):
            self.smileFrames += 1

        # -----------------------------
        # Speaking
        # -----------------------------

        if (
            features["jawOpen"] > 0.15
        ):
            self.speakingFrames += 1

        # -----------------------------
        # Head Movement
        # -----------------------------

        if self.previousYaw is not None:

            movement = (
                abs(
                    features["headYaw"]
                    - self.previousYaw
                )
                + abs(
                    features["headPitch"]
                    - self.previousPitch
                )
                + abs(
                    features["headRoll"]
                    - self.previousRoll
                )
            )

            self.headMovement += movement

        self.previousYaw = features["headYaw"]
        self.previousPitch = features["headPitch"]
        self.previousRoll = features["headRoll"]

    # -----------------------------------------

    def get_summary(self):

        if self.totalFrames == 0:
            return None

        return {

            "totalFrames":
                self.totalFrames,

            "blinkCount":
                self.blinkCount,

            "eyeContact":
                round(
                    (self.eyeContactFrames /
                     self.totalFrames) * 100,
                    1,
                ),

            "smilePercentage":
                round(
                    (self.smileFrames /
                     self.totalFrames) * 100,
                    1,
                ),

            "speakingPercentage":
                round(
                    (self.speakingFrames /
                     self.totalFrames) * 100,
                    1,
                ),

            "headMovement": round(
                self.headMovement / self.totalFrames,
                     2,
                ),
        }