import api from "../api";

export async function predictBehavior(summary) {
  const response = await api.post(
    "/behavior/predict",
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