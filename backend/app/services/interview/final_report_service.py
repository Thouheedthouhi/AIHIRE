import json

import google.generativeai as genai

from app.core.config import settings


genai.configure(api_key=settings.GEMINI_API_KEY)


class FinalReportService:

    def __init__(self):

        self.model = genai.GenerativeModel("gemini-2.5-flash")

    def generate_report(
        self,
        request,
    ):

        prompt = f"""
You are an expert technical interview coach.

Generate a structured interview performance report for the candidate.

Candidate Role:
{request.role}

Resume Analysis:
{request.resume_analysis}

Interview Questions:
{json.dumps(request.questions, indent=2)}

Candidate Answers:
{json.dumps(request.answers, indent=2)}

Behavior Prediction:
- Engagement: {request.behavior.engagement}
- Boredom: {request.behavior.boredom}
- Confusion: {request.behavior.confusion}
- Frustration: {request.behavior.frustration}

Return ONLY valid JSON.

Use this exact schema:

{{
    "overallScore": integer (0-100),

    "technicalScore": integer,

    "communicationScore": integer,

    "interviewPresence": integer,

    "resumeAlignment": integer,

    "strengths": [
        "...",
        "...",
        "..."
    ],

    "improvements": [
        "...",
        "...",
        "..."
    ],

    "summary": "...",

    "interviewReadiness": "..."
}}

Guidelines:

- This report is for the candidate, NOT the interviewer.
- Give constructive and encouraging feedback.
- Do not mention hiring or rejection.
- Focus on learning and improvement.
- Return JSON only.
"""

        response = self.model.generate_content(
            prompt
        )

        text = response.text.strip()

        if text.startswith("```json"):
            text = (
                text.replace(
                    "```json",
                    "",
                )
                .replace(
                    "```",
                    "",
                )
                .strip()
            )

        elif text.startswith("```"):
            text = (
                text.replace(
                    "```",
                    "",
                )
                .strip()
            )

        return json.loads(text)