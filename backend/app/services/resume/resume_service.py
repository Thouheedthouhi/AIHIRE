import os
import shutil

from fastapi import UploadFile
from app.services.resume.tailoring_service import (
    tailor_resume,
)
from app.services.resume.parser_service import extract_resume_text
from app.services.resume.ats_service import analyze_resume
from app.services.resume.matcher_service import match_resume

UPLOAD_DIR = "uploads"


async def save_resume(file: UploadFile):
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename,
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "size": os.path.getsize(file_path),
        "status": "uploaded",
    }


def get_latest_resume_text():
    """
    Returns the extracted text from the latest uploaded resume.
    """

    files = [
        os.path.join(UPLOAD_DIR, file)
        for file in os.listdir(UPLOAD_DIR)
        if file.endswith((".pdf", ".docx"))
    ]

    if not files:
        raise FileNotFoundError("No uploaded resume found.")

    latest_resume = max(
        files,
        key=os.path.getctime,
    )

    extracted_text = extract_resume_text(
        latest_resume
    )

    return latest_resume, extracted_text


def analyze_resume_ats(
    target_role: str,
):
    """
    Perform ATS analysis.
    """

    latest_resume, extracted_text = get_latest_resume_text()

    analysis = analyze_resume(
        extracted_text,
        target_role,
    )

    return {
        "status": "success",
        "filename": os.path.basename(latest_resume),
        **analysis,
    }


def analyze_resume_match(
    job_description: str,
):
    """
    Match resume against a Job Description.
    """

    latest_resume, extracted_text = get_latest_resume_text()

    analysis = match_resume(
        extracted_text,
        job_description,
    )

    return {
        "status": "success",
        "filename": os.path.basename(latest_resume),
        **analysis,
    }
def tailor_uploaded_resume(
    job_description: str,
):
    """
    Tailor the latest uploaded resume for a Job Description.
    """

    latest_resume, extracted_text = get_latest_resume_text()

    result = tailor_resume(
        resume_text=extracted_text,
        job_description=job_description,
    )

    return {
        "filename": os.path.basename(
            latest_resume
        ),
        **result,
    }