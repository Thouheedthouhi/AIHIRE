import axios from "axios";

const API =
  "http://localhost:8000/interview";

// --------------------------------------
// Start Interview
// --------------------------------------

export async function startInterview(
  data
) {
  const response = await axios.post(
    `${API}/start`,
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

  const response = await axios.post(
    `${API}/upload-audio`,
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