from fastapi import APIRouter

from app.services.dashboard.dashboard_service import (
    DashboardService,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)

service = DashboardService()


@router.get("/stats")
async def dashboard_stats():

    return await service.get_stats()