from app.services.behavior.behavior_service import (
    behavior_service,
)


sample = {

    "blinkCount": 2,

    "eyeContact": 82.5,

    "smilePercentage": 15,

    "speakingPercentage": 30,

    "headMovement": 1.9,

}


prediction = behavior_service.predict(
    sample
)

print()

print("Prediction")

print(prediction)