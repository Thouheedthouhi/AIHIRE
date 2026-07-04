import api from "../api";

export async function startInterview(data) {
  const response = await api.post(
    "/interview/start",
    data
  );

  return response.data;
}