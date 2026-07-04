from fastapi import APIRouter

from app.schemas.interview import (
    InterviewStartRequest,
    InterviewStartResponse,
)

from app.services.interview.interview_service import (
    start_interview,
)

router = APIRouter(
    prefix="/interview",
    tags=["Interview"],
)


@router.post(
    "/start",
    response_model=InterviewStartResponse,
)
async def start(
    request: InterviewStartRequest,
):
    return start_interview(
        target_role=request.target_role,
        interview_type=request.interview_type,
        difficulty=request.difficulty,
    )