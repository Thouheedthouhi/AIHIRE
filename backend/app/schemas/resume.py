from pydantic import BaseModel


class ResumeUploadResponse(BaseModel):
    filename: str
    size: int
    status: str


class ResumeAnalysisRequest(BaseModel):
    target_role: str


class ResumeMatchRequest(BaseModel):
    job_description: str


class MatchBreakdown(BaseModel):
    skills: int
    experience: int
    education: int
    projects: int
    responsibilities: int
    keywords: int


class PriorityImprovements(BaseModel):
    high: list[str]
    medium: list[str]
    low: list[str]


class ResumeMatchResponse(BaseModel):
    overall_match: int
    skill_match: int

    matched_skills: list[str]
    missing_keywords: list[str]
    extra_skills: list[str]

    breakdown: MatchBreakdown

    overview: str

    strengths: list[str]

    priority_improvements: PriorityImprovements

    next_steps: list[str]

    interview_readiness: str

    motivation: str

class ResumeTailorRequest(BaseModel):
    job_description: str    