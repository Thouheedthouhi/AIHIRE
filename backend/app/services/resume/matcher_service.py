import re

from app.services.resume.skills import (
    ROLE_SKILLS,
    SKILL_ALIASES,
)

# ---------------------------------
# Build a master skill list
# ---------------------------------

ALL_SKILLS = sorted(
    {
        skill
        for role in ROLE_SKILLS.values()
        for skill in role.keys()
    }
)


def has_skill(text: str, skill: str):
    """
    Check whether a skill (or one of its aliases)
    exists in the given text.
    """

    aliases = SKILL_ALIASES.get(
        skill,
        [skill.lower()],
    )

    text = text.lower()

    for alias in aliases:
        if alias.lower() in text:
            return True

    return False


def match_resume(
    resume_text: str,
    job_description: str,
):
    """
    Compare resume against a Job Description.
    """

    resume_lower = resume_text.lower()
    jd_lower = job_description.lower()

    # -----------------------------
    # Skills in Resume
    # -----------------------------

    resume_skills = [
        skill
        for skill in ALL_SKILLS
        if has_skill(resume_lower, skill)
    ]

    # -----------------------------
    # Skills in JD
    # -----------------------------

    jd_skills = [
        skill
        for skill in ALL_SKILLS
        if has_skill(jd_lower, skill)
    ]

    # -----------------------------
    # Matched
    # -----------------------------

    matched_skills = [
        skill
        for skill in jd_skills
        if skill in resume_skills
    ]

    # -----------------------------
    # Missing
    # -----------------------------

    missing_skills = [
        skill
        for skill in jd_skills
        if skill not in resume_skills
    ]

    # -----------------------------
    # Extra
    # -----------------------------

    extra_skills = [
        skill
        for skill in resume_skills
        if skill not in jd_skills
    ]

    # -----------------------------
    # Skill Match %
    # -----------------------------

    if len(jd_skills) == 0:
        skill_match = 100
    else:
        skill_match = round(
            len(matched_skills)
            / len(jd_skills)
            * 100
        )

    overall_match = calculate_match_score(
        resume_lower,
        skill_match,
    )

    return {
        "overall_match": overall_match,
        "skill_match": skill_match,
        "matched_skills": sorted(matched_skills),
        "missing_keywords": sorted(missing_skills),
        "extra_skills": sorted(extra_skills),
    }


def calculate_match_score(
    resume_text: str,
    skill_match: int,
):
    """
    Overall Resume vs JD score.
    """

    score = 0

    score += round(skill_match * 0.60)

    if "project" in resume_text:
        score += 10

    if (
        "experience" in resume_text
        or "internship" in resume_text
    ):
        score += 10

    if "education" in resume_text:
        score += 10

    if "github" in resume_text:
        score += 5

    if "linkedin" in resume_text:
        score += 5

    return min(score, 100)