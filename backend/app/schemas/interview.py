from typing import List, Optional

from pydantic import BaseModel


class InterviewStartRequest(BaseModel):
    # Mode
    mode: str = "ai"

    # AI Interview
    target_role: Optional[str] = None
    difficulty: Optional[str] = "Medium"

    interview_type: Optional[str] = "Mixed"

    question_count: Optional[int] = 5

    # Custom Interview
    questions: Optional[List[str]] = None


class InterviewStartResponse(BaseModel):
    questions: List[str]