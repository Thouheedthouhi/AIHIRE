import json

import google.generativeai as genai

from app.core.config import settings


genai.configure(api_key=settings.GEMINI_API_KEY)


class FinalReportService:

    def __init__(self):
        self.model = genai.GenerativeModel("gemini-2.5-flash")

    def generate_report(self, request):

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

Schema:

{{
  "overallScore": 0,
  "technicalScore": 0,
  "communicationScore": 0,
  "interviewPresence": 0,
  "resumeAlignment": 0,
  "strengths": [],
  "improvements": [],
  "summary": "",
  "interviewReadiness": ""
}}
"""

        try:
            response = self.model.generate_content(prompt)

            if not response:
                raise Exception("Gemini returned no response")

            if not hasattr(response, "text"):
                raise Exception(f"Gemini response has no text: {response}")

            text = response.text.strip()

            print("\n========= GEMINI RESPONSE =========")
            print(text)
            print("===================================\n")

            if text.startswith("```json"):
                text = text.replace("```json", "").replace("```", "").strip()

            elif text.startswith("```"):
                text = text.replace("```", "").strip()

            report = json.loads(text)

            return report

        except json.JSONDecodeError as e:
            print("JSON Decode Error")
            print(text)
            raise Exception(f"Gemini returned invalid JSON: {e}")

        except Exception as e:
            print("Gemini Error:", e)
            raise