import re


def generate_feedback(text: str, matched_skills, missing_skills):
    """
    Generate ATS feedback based on resume quality.
    """

    text_lower = text.lower()

    strengths = []
    improvements = []

    # ------------------------
    # Strengths
    # ------------------------

    if "github" in text_lower:
        strengths.append(
            "GitHub profile included."
        )

    if "linkedin" in text_lower:
        strengths.append(
            "LinkedIn profile included."
        )

    if "project" in text_lower:
        strengths.append(
            "Projects section is present."
        )

    if len(matched_skills) >= 8:
        strengths.append(
            "Strong technical skill set."
        )

    if "education" in text_lower:
        strengths.append(
            "Education section is well defined."
        )

    # ------------------------
    # Improvements
    # ------------------------

    if "internship" not in text_lower and "experience" not in text_lower:
        improvements.append(
            "Add internship or professional experience."
        )

    if not re.search(r"\d+%", text):
        improvements.append(
            "Add measurable achievements using numbers or percentages."
        )

    if len(missing_skills) > 0:
        improvements.append(
            "Add relevant technical skills based on your target role."
        )

    if "summary" not in text_lower and "objective" not in text_lower:
        improvements.append(
            "Include a professional summary at the top of your resume."
        )

    if len(strengths) == 0:
        strengths.append(
            "Resume structure is acceptable."
        )

    if len(improvements) == 0:
        improvements.append(
            "Resume is well optimized for ATS."
        )

    summary = (
        f"Your resume contains {len(matched_skills)} relevant technical skills. "
        f"There are {len(missing_skills)} important skills missing based on the ATS checklist."
    )

    return {
        "summary": summary,
        "strengths": strengths,
        "improvements": improvements,
    }