from fastapi import APIRouter, File, HTTPException, UploadFile

from app.schemas.resume import (
    ResumeUploadResponse,
    ResumeAnalysisRequest,
    ResumeMatchRequest,
)

from app.services.resume.resume_service import (
    save_resume,
    analyze_resume_ats,
    analyze_resume_match,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)

ALLOWED_TYPES = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]


@router.post(
    "/upload",
    response_model=ResumeUploadResponse,
)
async def upload_resume(
    file: UploadFile = File(...),
):
    """
    Upload a resume (PDF or DOCX).
    """

    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed.",
        )

    return await save_resume(file)


@router.post("/ats")
async def ats_analysis(
    request: ResumeAnalysisRequest,
):
    """
    Analyze resume using ATS standards.
    """

    try:
        return analyze_resume_ats(
            request.target_role
        )

    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail="No uploaded resume found.",
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


@router.post("/match")
async def resume_match(
    request: ResumeMatchRequest,
):
    """
    Match resume against a Job Description.
    """

    try:
        return analyze_resume_match(
            request.job_description
        )

    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail="No uploaded resume found.",
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )