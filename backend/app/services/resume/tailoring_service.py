import json

from app.services.resume.gemini_service import model
from app.services.resume.tailoring_prompt import (
    build_tailoring_prompt,
)


def tailor_resume(
    resume_text: str,
    job_description: str,
):
    """
    Generate an ATS-optimized tailored resume using Gemini.
    """

    prompt = build_tailoring_prompt(
        resume_text=resume_text,
        job_description=job_description,
    )

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        tailored_resume = json.loads(text)

        return {
            "status": "success",
            "tailored_resume": tailored_resume,
        }

    except Exception as e:

        print("Tailoring Error:", e)

        return {
            "status": "failed",
            "message": str(e),
        }