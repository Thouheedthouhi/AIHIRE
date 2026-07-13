import api from "../api";

/**
 * ---------------------------------------------
 * Generate Final Interview Report
 * ---------------------------------------------
 */

export async function generateFinalReport(data) {
  const response = await api.post(
    "/report/final",
    data
  );

  return response.data;
}