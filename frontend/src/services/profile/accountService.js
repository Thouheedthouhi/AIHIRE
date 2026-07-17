import api from "../api";

export async function deleteAccount(userId) {
  const response = await api.delete(`/account/delete/${userId}`);
  return response.data;
}