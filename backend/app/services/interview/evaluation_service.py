import json
import re

import google.generativeai as genai

from app.core.config import settings

genai.configure(
    api_key=settings.GEMINI_API_KEY
)

model = genai.GenerativeModel("gemini-2.5-flash")


def _parse_json(response_text: str):
    """
    Parse Gemini JSON safely.
    """

    cleaned = re.sub(
        r"```json|```",
        "",
        response_text,
    ).strip()

    try:
        return json.loads(cleaned)
    except Exception:
        return {
            "technical_score": 0,
            "communication_score": 0,
            "completeness_score": 0,
            "overall_score": 0,
            "strengths": [],
            "improvements": [],
            "ideal_answer": "",
        }


def evaluate_answer(
    question: str,
    answer: str,
    resume: str,
    role: str,
):
    """
    Evaluate a candidate answer using Gemini.
    """

    prompt = f"""
You are a Senior Technical Interviewer.

Evaluate the candidate's answer.

=========================
TARGET ROLE
=========================

{role}

=========================
CANDIDATE RESUME
=========================

{resume}

=========================
QUESTION
=========================

{question}

=========================
CANDIDATE ANSWER
=========================

{answer}

=========================
Instructions

Evaluate objectively.

Score from 1-10 for:

- technical_score
- communication_score
- completeness_score

Calculate overall_score.

Return ONLY valid JSON.

Example:

{{
    "technical_score":9,
    "communication_score":8,
    "completeness_score":9,
    "overall_score":8.7,
    "strengths":[
        "...",
        "..."
    ],
    "improvements":[
        "...",
        "..."
    ],
    "ideal_answer":"..."
}}
"""

    response = model.generate_content(
        prompt
    )

    return _parse_json(
        response.text
    )