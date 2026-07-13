import json
import re

import google.generativeai as genai

from app.core.config import settings

from app.services.interview.resume_service import (
    get_resume_context,
)

from app.services.interview.prompt_builder import (
    build_interview_prompt,
)

genai.configure(
    api_key=settings.GEMINI_API_KEY
)

model =genai.GenerativeModel("gemini-2.5-flash")


def _parse_questions(response_text: str):
    """
    Parse Gemini response safely.
    """

    try:
        return json.loads(response_text)

    except Exception:
        pass

    cleaned = re.sub(
        r"```json|```",
        "",
        response_text,
    ).strip()

    try:
        return json.loads(cleaned)

    except Exception:
        pass

    questions = []

    for line in cleaned.split("\n"):
        line = line.strip()

        if not line:
            continue

        line = re.sub(
            r"^\d+[\).\s-]*",
            "",
            line,
        )

        line = line.lstrip("-•").strip()

        if line:
            questions.append(line)

    return questions


def generate_questions(
    role: str,
    difficulty: str,
    interview_type: str,
    question_count: int,
):
    """
    Generate interview questions primarily
    from the uploaded resume.
    """

    resume_text = get_resume_context()

    if not resume_text:
        resume_text = (
            "No resume uploaded."
        )

    prompt = build_interview_prompt(
        resume_text=resume_text,
        role=role,
        difficulty=difficulty,
        interview_type=interview_type,
        question_count=question_count,
    )

    response = model.generate_content(
        prompt
    )

    questions = _parse_questions(
        response.text
    )

    if len(questions) > question_count:
        questions = questions[:question_count]

    return questions