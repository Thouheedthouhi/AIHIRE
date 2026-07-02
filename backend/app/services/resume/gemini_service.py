import json
import os

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_ai_feedback(
    resume_text: str,
    target_role: str,
    ats_score: int,
    matched_skills: list,
    missing_skills: list,
    breakdown: dict,
    job_description: str | None = None,
):
    """
    Generate AI-powered recruiter feedback using Gemini.
    """

    prompt = f"""
You are a Senior Technical Recruiter, ATS Expert and Career Coach with over 15 years of hiring experience at Google, Microsoft, Amazon and Meta.

Your job is to evaluate this resume exactly like a professional recruiter.

====================================================
TARGET ROLE
====================================================

{target_role}

====================================================
ATS SCORE
====================================================

{ats_score}/100

====================================================
ATS BREAKDOWN
====================================================

Skills: {breakdown["skills"]}/35
Projects: {breakdown["projects"]}/15
Experience: {breakdown["experience"]}/15
Sections: {breakdown["sections"]}/15
Formatting: {breakdown["formatting"]}/10
Contact: {breakdown["contact"]}/10

====================================================
MATCHED SKILLS
====================================================

{", ".join(matched_skills)}

====================================================
MISSING SKILLS
====================================================

{", ".join(missing_skills)}

====================================================
JOB DESCRIPTION
====================================================

{job_description if job_description else "No Job Description Provided"}

====================================================
FULL EXTRACTED RESUME
====================================================

{resume_text}

====================================================

Instructions:

1. Read the COMPLETE resume carefully.
2. If a Job Description is provided, compare the resume against it.
3. Evaluate the resume specifically for the target role.
4. Never invent projects, experience or skills.
5. Mention strong projects if present.
6. Mention internship/work experience if present.
7. Mention missing ATS keywords.
8. Mention weak bullet points if any.
9. Mention if achievements are not quantified.
10. Mention if project descriptions lack impact.
11. Mention formatting issues only if obvious.
12. Give recruiter-level suggestions.
13. Be honest and concise.
14. Keep the summary below 120 words.
15. Do NOT repeat the ATS score.

Return ONLY valid JSON.

{{
    "summary": "",

    "strengths": [
        "",
        "",
        "",
        "",
        ""
    ],

    "improvements": [
        "",
        "",
        "",
        "",
        ""
    ],

    "overall_assessment": "",

    "hiring_recommendation": ""
}}
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        # Remove markdown if Gemini wraps JSON
        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        feedback = json.loads(text)

        return {

            "summary": feedback.get(
                "summary",
                ""
            ),

            "strengths": feedback.get(
                "strengths",
                []
            ),

            "improvements": feedback.get(
                "improvements",
                []
            ),

            "overall_assessment": feedback.get(
                "overall_assessment",
                ""
            ),

            "hiring_recommendation": feedback.get(
                "hiring_recommendation",
                ""
            ),

        }

    except Exception as e:

        print("Gemini Error:", e)

        return {

            "summary": "AI feedback could not be generated at this time.",

            "strengths": [],

            "improvements": [],

            "overall_assessment": "",

            "hiring_recommendation": "Unable to determine.",

        }