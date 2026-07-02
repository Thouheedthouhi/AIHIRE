import re

from app.services.resume.skills import (
    ROLE_SKILLS,
    SKILL_ALIASES,
)
from app.services.resume.gemini_service import generate_ai_feedback


def analyze_resume(
    text: str,
    target_role: str,
):
    """
    Analyze resume against the selected target role.
    """

    text_lower = text.lower()

    role = ROLE_SKILLS.get(target_role)

    if role is None:
        raise ValueError(
            f"Unknown target role: {target_role}"
        )

    matched_skills = []
    missing_skills = []

    skill_score = 0
    max_skill_score = sum(role.values())

    # ---------------------------------
    # Skill Matching (35 Marks)
    # ---------------------------------

    for skill, weight in role.items():

        aliases = SKILL_ALIASES.get(
            skill,
            [skill.lower()],
        )

        found = False

        for alias in aliases:

            if alias.lower() in text_lower:
                found = True
                break

        if found:
            matched_skills.append(skill)
            skill_score += weight
        else:
            missing_skills.append(skill)

    skill_points = round(
        (skill_score / max_skill_score) * 35
    )

    score = skill_points

    # ---------------------------------
    # Resume Sections (15 Marks)
    # ---------------------------------

    sections = 0

    if "education" in text_lower:
        sections += 4

    if "project" in text_lower:
        sections += 4

    if (
        "experience" in text_lower
        or "internship" in text_lower
    ):
        sections += 4

    if (
        "technical skills" in text_lower
        or "skills" in text_lower
    ):
        sections += 3

    score += sections

    # ---------------------------------
    # Projects (15 Marks)
    # ---------------------------------

    projects = 0

    project_count = text_lower.count("project")

    if project_count >= 3:
        projects = 15

    elif project_count >= 2:
        projects = 12

    elif project_count >= 1:
        projects = 8

    score += projects

    # ---------------------------------
    # Experience (15 Marks)
    # ---------------------------------

    experience = 0

    if "internship" in text_lower:
        experience += 8

    if "experience" in text_lower:
        experience += 7

    score += experience

    # ---------------------------------
    # Contact Information (10 Marks)
    # ---------------------------------

    contact = 0

    if re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+",
        text,
    ):
        contact += 4

    if re.search(
        r"\+?\d[\d\s-]{8,}",
        text,
    ):
        contact += 3

    if "linkedin" in text_lower:
        contact += 2

    if "github" in text_lower:
        contact += 1

    score += contact

    # ---------------------------------
    # ATS Formatting (10 Marks)
    # ---------------------------------

    formatting = 10

    word_count = len(text.split())

    if word_count < 250:
        formatting -= 3

    elif word_count > 900:
        formatting -= 3

    score += formatting

    # ---------------------------------
    # Quantified Achievements Bonus (5)
    # ---------------------------------

    quantified = len(
        re.findall(
            r"\d+%|\d+\+|\d+\s*(users|clients|projects)",
            text_lower,
        )
    )

    score += min(
        quantified,
        5,
    )

    score = min(score, 100)

    # ---------------------------------
    # Grade
    # ---------------------------------

    if score >= 90:
        grade = "A+"

    elif score >= 80:
        grade = "A"

    elif score >= 70:
        grade = "B"

    elif score >= 60:
        grade = "C"

    elif score >= 50:
        grade = "D"

    else:
        grade = "F"

    # ---------------------------------
    # AI Feedback
    # ---------------------------------

    feedback = generate_ai_feedback(
    resume_text=text,
    target_role=target_role,
    ats_score=score,
    matched_skills=matched_skills,
    missing_skills=missing_skills,
    breakdown={
        "skills": skill_points,
        "projects": projects,
        "experience": experience,
        "sections": sections,
        "formatting": formatting,
        "contact": contact,
    },
)

    # ---------------------------------
    # Final Response
    # ---------------------------------

    return {

        "target_role": target_role,

        "ats_score": score,

        "grade": grade,

        "breakdown": {

            "skills": skill_points,

            "projects": projects,

            "experience": experience,

            "sections": sections,

            "formatting": formatting,

            "contact": contact,

        },

        "skill_match": round(
            (skill_score / max_skill_score) * 100
        ),

        "matched_skills": sorted(matched_skills),

        "missing_keywords": sorted(missing_skills),

        "sections": {

            "education": "education" in text_lower,

            "projects": "project" in text_lower,

            "skills": (
                "technical skills" in text_lower
                or "skills" in text_lower
            ),

            "experience": (
                "experience" in text_lower
                or "internship" in text_lower
            ),

        },

        **feedback,

    }