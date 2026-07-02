from pydantic import BaseModel


class ResumeUploadResponse(BaseModel):
    filename: str
    size: int
    status: str


class ResumeAnalysisRequest(BaseModel):
    target_role: str


class ResumeMatchRequest(BaseModel):
    job_description: str