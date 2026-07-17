from fastapi import APIRouter, Depends
from bson import ObjectId

from app.core.dependencies import get_current_user
from app.database.database import database

router = APIRouter(
    prefix="/history",
    tags=["Interview History"],
)


@router.get("/")
async def get_history(
    current_user=Depends(get_current_user),
):
    cursor = (
        database.interview_reports
        .find(
            {
                "userId": str(current_user["_id"]),
            },
            {
                "overallScore": 1,
                "technicalScore": 1,
                "communicationScore": 1,
                "role": 1,
                "createdAt": 1,
            },
        )
        .sort("createdAt", -1)
    )

    interviews = []

    async for interview in cursor:
        interviews.append(
            {
                "id": str(interview["_id"]),
                "role": interview.get("role"),
                "overallScore": interview.get(
                    "overallScore", 0
                ),
                "technicalScore": interview.get(
                    "technicalScore", 0
                ),
                "communicationScore": interview.get(
                    "communicationScore", 0
                ),
                "createdAt": interview.get(
                    "createdAt"
                ),
            }
        )

    return interviews


@router.get("/{report_id}")
async def get_report(
    report_id: str,
    current_user=Depends(get_current_user),
):
    report = await database.interview_reports.find_one(
        {
            "_id": ObjectId(report_id),
            "userId": str(current_user["_id"]),
        }
    )

    if not report:
        return {
            "message": "Report not found"
        }

    report["_id"] = str(report["_id"])

    return report