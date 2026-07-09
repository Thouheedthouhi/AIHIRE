def map_behavior_features(summary: dict):

    return {
        "blinkCount": summary.get(
            "blinkCount", 0
        ),
        "eyeContact": summary.get(
            "eyeContact", 0
        ),
        "smilePercentage": summary.get(
            "smilePercentage", 0
        ),
        "speakingPercentage": summary.get(
            "speakingPercentage", 0
        ),
        "headMovement": summary.get(
            "headMovement", 0
        ),
    }