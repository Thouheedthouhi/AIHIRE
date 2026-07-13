from pydantic import BaseModel
from typing import List


# ---------------------------------------------
# Request
# ---------------------------------------------

class BehaviorPrediction(BaseModel):
    engagement: int
    boredom: int
    confusion: int
    frustration: int


class FinalReportRequest(BaseModel):
    role: str
    resume_analysis: str
    questions: List[str]
    answers: List[str]
    behavior: BehaviorPrediction


# ---------------------------------------------
# Response
# ---------------------------------------------

class FinalReportResponse(BaseModel):
    overallScore: int

    technicalScore: int

    communicationScore: int

    interviewPresence: int

    resumeAlignment: int

    strengths: List[str]

    improvements: List[str]

    summary: str

    interviewReadiness: str