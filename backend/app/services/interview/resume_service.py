from app.services.resume.resume_service import (
    get_latest_resume_text,
)


def get_resume_context():
    """
    Returns the latest uploaded resume text.

    This service only READS the resume.
    It never modifies the Resume module.
    """

    try:
        _, resume_text = get_latest_resume_text()

        return resume_text

    except FileNotFoundError:
        return None