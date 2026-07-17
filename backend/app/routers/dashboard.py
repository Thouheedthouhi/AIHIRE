from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user
from app.services.dashboard.dashboard_service import (
    DashboardService,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)

service = DashboardService()


@router.get("/stats")
async def dashboard_stats(
    current_user=Depends(get_current_user),
):
    return await service.get_stats()