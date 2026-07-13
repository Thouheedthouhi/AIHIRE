from fastapi import APIRouter

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
):

    report = service.generate_report(
        request
    )

    return report