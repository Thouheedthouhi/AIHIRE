from pydantic import BaseModel


class InterviewStartRequest(BaseModel):
    target_role: str
    interview_type: str
    difficulty: str


class InterviewStartResponse(BaseModel):
    session_id: str
    questions: list[str]