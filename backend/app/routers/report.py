from datetime import datetime

from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user
from app.database.database import database
from app.schemas.report import (
    FinalReportRequest,
    FinalReportResponse,
)
from app.services.interview.final_report_service import (
    FinalReportService,
)

router = APIRouter(
    prefix="/report",
    tags=["Report"],
)

service = FinalReportService()


@router.post(
    "/final",
    response_model=FinalReportResponse,
)
async def generate_final_report(
    request: FinalReportRequest,
    current_user=Depends(get_current_user),
):
    report = service.generate_report(request)

    # Save report to MongoDB
    report_document = {
        **report,
        "userId": str(current_user["_id"]),
        "role": request.role,
        "createdAt": datetime.utcnow(),
    }

    await database.interview_reports.insert_one(
        report_document
    )

    return report