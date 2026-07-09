from pydantic import BaseModel


class BehaviorRequest(BaseModel):
    blinkCount: float
    eyeContact: float
    smilePercentage: float
    speakingPercentage: float
    headMovement: float


class BehaviorResponse(BaseModel):
    engagement: int
    boredom: int
    confusion: int
    frustration: int