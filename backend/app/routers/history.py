from fastapi import APIRouter
from app.services.history.history_service import HistoryService

router = APIRouter(
    prefix="/history",
    tags=["Interview History"],
)

service = HistoryService()


@router.get("/")
async def get_history():
    return service.get_history()


@router.get("/{interview_id}")
async def get_interview(interview_id: str):
    return service.get_interview(interview_id)