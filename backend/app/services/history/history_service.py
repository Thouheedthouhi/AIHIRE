from bson import ObjectId

from app.db.mongodb import db


class HistoryService:

    def __init__(self):
        self.collection = db.interview_reports

    def get_history(self):

        reports = list(
            self.collection.find().sort(
                "createdAt",
                -1,
            )
        )

        history = []

        for report in reports:

            history.append(
                {
                    "id": str(report["_id"]),
                    "role": report.get(
                        "role",
                        "",
                    ),
                    "overallScore": report.get(
                        "overallScore",
                        0,
                    ),
                    "createdAt": report.get(
                        "createdAt",
                        "",
                    ),
                }
            )

        return history

    def get_interview(
        self,
        interview_id,
    ):

        report = self.collection.find_one(
            {
                "_id": ObjectId(
                    interview_id
                )
            }
        )

        if not report:
            return {
                "message": "Interview not found"
            }

        report["_id"] = str(report["_id"])

        return report