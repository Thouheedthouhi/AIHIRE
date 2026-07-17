import api from "../api";

// --------------------------------------
// Start Interview
// --------------------------------------

export async function startInterview(data) {
  const response = await api.post(
    "/interview/start",
    data
  );

  return response.data;
}

// --------------------------------------
// Upload Audio & Evaluate
// --------------------------------------

export async function uploadInterviewAudio({
  audioBlob,
  question,
  role,
}) {
  const formData = new FormData();

  formData.append(
    "audio",
    audioBlob,
    "answer.webm"
  );

  formData.append(
    "question",
    question
  );

  formData.append(
    "role",
    role
  );

  const response = await api.post(
    "/interview/upload-audio",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
}