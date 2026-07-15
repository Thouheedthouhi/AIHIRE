from fastapi import APIRouter
from bson import ObjectId

from app.database.database import database

router = APIRouter(
    prefix="/history",
    tags=["Interview History"],
)


@router.get("/")
async def get_history():

    cursor = (
        database.interview_reports
        .find(
            {},
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
async def get_report(report_id: str):

    report = await database.interview_reports.find_one(
        {
            "_id": ObjectId(report_id)
        }
    )

    if not report:
        return {
            "message": "Report not found"
        }

    report["_id"] = str(report["_id"])

    return report