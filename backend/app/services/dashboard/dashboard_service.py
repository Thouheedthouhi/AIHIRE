from app.database.database import database


class DashboardService:

    async def get_stats(self):

        interviews = await database.interview_reports.find().to_list(None)

        total = len(interviews)

        if total == 0:
            return {
                "totalInterviews": 0,
                "averageScore": 0,
                "highestScore": 0,
                "latestScore": 0,
                "recentInterviews": [],
            }

        scores = [
            interview.get("overallScore", 0)
            for interview in interviews
        ]

        interviews.sort(
            key=lambda x: x.get("createdAt"),
            reverse=True,
        )

        recent = []

        for interview in interviews[:5]:

            recent.append(
                {
                    "role": interview.get("role"),
                    "overallScore": interview.get(
                        "overallScore", 0
                    ),
                    "createdAt": interview.get(
                        "createdAt"
                    ),
                }
            )

        return {
            "totalInterviews": total,
            "averageScore": round(
                sum(scores) / total
            ),
            "highestScore": max(scores),
            "latestScore": interviews[0].get(
                "overallScore", 0
            ),
            "recentInterviews": recent,
        }