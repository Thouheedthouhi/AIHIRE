import re

from app.services.resume.skills import (
    ALL_SKILLS,
    SKILL_ALIASES,
)


def has_skill(
    text: str,
    skill: str,
):
    """
    Check if a skill or any of its aliases
    exists in the given text.
    """

    text = text.lower()

    aliases = SKILL_ALIASES.get(
        skill,
        [skill.lower()],
    )

    for alias in aliases:

        pattern = rf"\b{re.escape(alias.lower())}\b"

        if re.search(pattern, text):
            return True

    return False


def extract_skills(
    text: str,
):
    """
    Extract all skills detected in text.
    """

    skills = []

    for skill in ALL_SKILLS:

        if has_skill(
            text,
            skill,
        ):
            skills.append(skill)

    return sorted(skills)