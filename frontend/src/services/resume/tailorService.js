import api from "../api";

export async function tailorResume(jobDescription) {
  const response = await api.post(
    "/resume/tailor",
    {
      job_description: jobDescription,
    }
  );

  return response.data;
}