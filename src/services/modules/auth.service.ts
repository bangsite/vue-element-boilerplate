import type { AxiosRequestConfig, AxiosResponse } from "axios";
import ApiService from "../api.service";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const login = async (data: Auth.Login, config?: AxiosRequestConfig): Promise<any> => {
  return await ApiService.post("/login", data, {
    headers: {
      "x-api-key": API_KEY,
    },
    ...config,
  });
};

const signUp = async (data: Auth.Register, config?: AxiosRequestConfig): Promise<any> => {
  return await ApiService.post("/signup", data, {
    headers: {
      "x-api-key": API_KEY,
    },
    ...config,
  });
};

const logout = (config = {}): Promise<AxiosResponse> => {
  return ApiService.get("/logout", {
    headers: {
      "x-api-key": API_KEY,
    },
    ...config,
  });
};

export { login, signUp, logout };
