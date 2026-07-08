// ---------------------------------------------
// AIHire Behavior Tracker
// ---------------------------------------------

class BehaviorTracker {
  constructor() {
    this.reset();
  }

  reset() {
    this.totalFrames = 0;

    this.blinkCount = 0;

    this.previousBlink = false;

    this.eyeContactFrames = 0;

    this.smileFrames = 0;

    this.speakingFrames = 0;

    this.headMovement = 0;

    this.previousYaw = null;

    this.previousPitch = null;

    this.previousRoll = null;
  }

  update(features) {
    if (!features) return;

    this.totalFrames++;

    // -----------------------------
    // Blink Detection
    // -----------------------------

    const blinking =
      features.leftBlink > 0.6 ||
      features.rightBlink > 0.6;

    if (
      blinking &&
      !this.previousBlink
    ) {
      this.blinkCount++;
    }

    this.previousBlink = blinking;

    // -----------------------------
    // Eye Contact
    // -----------------------------

    if (
      Math.abs(features.headYaw) < 10 &&
      Math.abs(features.headPitch) < 10
    ) {
      this.eyeContactFrames++;
    }

    // -----------------------------
    // Smile
    // -----------------------------

    if (
      features.smileScore > 0.25
    ) {
      this.smileFrames++;
    }

    // -----------------------------
    // Speaking
    // -----------------------------

    if (
      features.jawOpen > 0.15
    ) {
      this.speakingFrames++;
    }

    // -----------------------------
    // Head Movement
    // -----------------------------

    if (
      this.previousYaw !== null
    ) {
      const movement =
        Math.abs(
          features.headYaw -
            this.previousYaw
        ) +
        Math.abs(
          features.headPitch -
            this.previousPitch
        ) +
        Math.abs(
          features.headRoll -
            this.previousRoll
        );

      this.headMovement +=
        movement;
    }

    this.previousYaw =
      features.headYaw;

    this.previousPitch =
      features.headPitch;

    this.previousRoll =
      features.headRoll;
  }

  getSummary() {
    if (
      this.totalFrames === 0
    ) {
      return null;
    }

    return {
      totalFrames:
        this.totalFrames,

      blinkCount:
        this.blinkCount,

      eyeContact:
        (
          (this.eyeContactFrames /
            this.totalFrames) *
          100
        ).toFixed(1),

      smilePercentage:
        (
          (this.smileFrames /
            this.totalFrames) *
          100
        ).toFixed(1),

      speakingPercentage:
        (
          (this.speakingFrames /
            this.totalFrames) *
          100
        ).toFixed(1),

      headMovement:
        Number(
          this.headMovement.toFixed(
            2
          )
        ),
    };
  }
}

export default new BehaviorTracker();