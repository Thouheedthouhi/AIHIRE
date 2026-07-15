import axios from "axios";

const API = "http://127.0.0.1:8000/dashboard";

export async function getDashboardStats() {
  const response = await axios.get(`${API}/stats`);
  return response.data;
}