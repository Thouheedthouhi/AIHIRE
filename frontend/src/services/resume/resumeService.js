import api from "../api";

/**
 * Upload Resume
 */
export async function uploadResume(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

/**
 * ATS Resume Analysis
 */
export async function analyzeATS(targetRole) {
  const response = await api.post("/resume/ats", {
    target_role: targetRole,
  });

  return response.data;
}

/**
 * Resume vs Job Description Match
 */
export async function analyzeMatch(jobDescription) {
  const response = await api.post(
    "/resume/match",
    {
      job_description: jobDescription,
    }
  );

  return response.data;
}