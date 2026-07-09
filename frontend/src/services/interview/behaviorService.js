import axios from "axios";

const API = "http://localhost:8000";

export async function predictBehavior(summary) {
  const response = await axios.post(
    `${API}/behavior/predict`,
    {
      blinkCount: summary.blinkCount,
      eyeContact: Number(summary.eyeContact),
      smilePercentage: Number(
        summary.smilePercentage
      ),
      speakingPercentage: Number(
        summary.speakingPercentage
      ),
      headMovement: Number(
        summary.headMovement
      ),
    }
  );

  return response.data;
}