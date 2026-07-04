import uuid

from app.services.resume.resume_service import (
    get_latest_resume_text,
)

from app.services.interview.question_generator import (
    generate_questions,
)


def start_interview(
    target_role: str,
    interview_type: str,
    difficulty: str,
):
    _, resume_text = get_latest_resume_text()

    questions = generate_questions(
        resume_text,
        target_role,
        interview_type,
        difficulty,
    )

    return {
        "session_id": str(uuid.uuid4()),
        "questions": questions,
    }