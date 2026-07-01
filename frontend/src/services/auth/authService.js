import api from "../api";
import { saveAuth, clearAuth } from "./tokenService";

export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  saveAuth(
    response.data.access_token,
    response.data.user
  );

  return response.data;
};

export const logout = () => {
  clearAuth();
};