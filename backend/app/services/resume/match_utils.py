import re

from app.services.resume.skills import (
    ALL_SKILLS,
    SKILL_ALIASES,
    EDUCATION_KEYWORDS,
    EXPERIENCE_KEYWORDS,
    PROJECT_KEYWORDS,
)


def contains_keyword(
    text: str,
    keyword: str,
):
    pattern = rf"\b{re.escape(keyword.lower())}\b"
    return re.search(
        pattern,
        text.lower(),
    ) is not None


def has_skill(
    text: str,
    skill: str,
):
    """
    Check if a skill or any of its aliases
    exists in text.
    """

    aliases = SKILL_ALIASES.get(
        skill,
        [skill.lower()],
    )

    for alias in aliases:

        if contains_keyword(
            text,
            alias,
        ):
            return True

    return False


def extract_skills(
    text: str,
):
    """
    Extract all skills found in text.
    """

    detected = []

    for skill in ALL_SKILLS:

        if has_skill(
            text,
            skill,
        ):
            detected.append(skill)

    return sorted(detected)


def education_score(
    resume_text: str,
    jd_text: str,
):
    """
    Education matching.
    """

    score = 0

    for keyword in EDUCATION_KEYWORDS:

        if (
            contains_keyword(
                jd_text,
                keyword,
            )
            and contains_keyword(
                resume_text,
                keyword,
            )
        ):
            score += 2

    return min(score, 10)


def experience_score(
    resume_text: str,
    jd_text: str,
):
    """
    Experience matching.
    """

    score = 0

    for keyword in EXPERIENCE_KEYWORDS:

        if (
            contains_keyword(
                jd_text,
                keyword,
            )
            and contains_keyword(
                resume_text,
                keyword,
            )
        ):
            score += 3

    return min(score, 20)


def project_score(
    resume_text: str,
):
    """
    Project relevance score.
    """

    count = 0

    for keyword in PROJECT_KEYWORDS:

        count += len(
            re.findall(
                rf"\b{re.escape(keyword.lower())}\b",
                resume_text.lower(),
            )
        )

    return min(
        count,
        10,
    )



def extract_keywords(text: str):
    """
    Extract meaningful words from text.
    """

    words = re.findall(
        r"[A-Za-z][A-Za-z+#.]{2,}",
        text.lower(),
    )

    stop_words = {
        "the",
        "and",
        "with",
        "for",
        "from",
        "this",
        "that",
        "your",
        "using",
        "have",
        "will",
        "into",
        "our",
        "their",
        "you",
        "are",
        "job",
        "role",
        "work",
        "team",
        "years",
        "year",
        "good",
    }

    return {
        word
        for word in words
        if word not in stop_words
    }


def keyword_match_score(
    resume_text: str,
    jd_text: str,
):
    """
    Returns keyword coverage score (0–10).
    """

    resume_keywords = extract_keywords(
        resume_text
    )

    jd_keywords = extract_keywords(
        jd_text
    )

    if not jd_keywords:
        return 10

    matched = (
        resume_keywords
        & jd_keywords
    )

    return round(
        len(matched)
        / len(jd_keywords)
        * 10
    )
def responsibility_score(
    resume_text: str,
    job_description: str,
):
    """
    Compare responsibilities in the resume and JD.
    Returns a score out of 10.
    """

    resume = resume_text.lower()
    jd = job_description.lower()

    responsibilities = [
        "develop",
        "design",
        "implement",
        "build",
        "deploy",
        "maintain",
        "optimize",
        "debug",
        "test",
        "collaborate",
        "integrate",
        "analyze",
        "document",
        "review",
        "monitor",
    ]

    matched = 0
    total = 0

    for responsibility in responsibilities:

        if responsibility in jd:
            total += 1

            if responsibility in resume:
                matched += 1

    if total == 0:
        return 10

    return round(
        matched / total * 10
    )
from app.services.resume.skills import ROLE_SKILLS


def weighted_skill_match(
    resume_skills: list,
    jd_skills: list,
):
    """
    Calculate weighted skill matching.
    """

    weights = {}

    for role in ROLE_SKILLS.values():
        weights.update(role)

    matched_weight = 0
    total_weight = 0

    matched = []
    missing = []

    for skill in jd_skills:

        weight = weights.get(
            skill,
            3,
        )

        total_weight += weight

        if skill in resume_skills:
            matched.append(skill)
            matched_weight += weight
        else:
            missing.append(skill)

    if total_weight == 0:
        percentage = 100

    else:
        percentage = round(
            matched_weight
            / total_weight
            * 100
        )

    return (
        percentage,
        matched,
        missing,
    )