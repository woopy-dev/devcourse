import { LoginProps } from "../pages/Login";
import { ResetPasswordProps } from "../pages/ResetPassword";
import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
  // const response = await httpClient.post("/users/join", userData);
  const response = { data: "login success" };
  return response.data;
}

export const resetRequest = async (userData: ResetPasswordProps) => {
  // const response = await httpClient.post("/users/reset", userData);
  const response = { data: "reset req success" };
  return response.data;
}

export const resetPassword = async (userData: ResetPasswordProps) => {
  // const response = await httpClient.post("/users/reset", userData);
  const response = { data: "reset success" };
  return response.data;
}

interface LoginResponse {
  token: string;
}

export const login = async (userData: LoginProps) => {
  // const response = await httpClient.post<LoginResponse>("/users/login", userData);
  const response = { data: "login success", token: "token" };
  return response;
}