import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import Cookies from "universal-cookie";
import {
  errorHandler,
  networkErrorStrategy,
} from "@/core/http-error-strategies";
import { API_URL } from "@/config/global";
import { setTokens, userName } from "@/store/auth/authSlice";
const cookies = new Cookies();
const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(
  (config) => {
    const token = cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const statusCode = error?.response?.status;
    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = cookies.get("refreshToken");
        if (refreshToken) {
          const { data } = await axios.post(
            `${API_URL}Security/UserLogin/RefreshToken`,
            { refreshToken, userName: localStorage.getItem("userName") },
          );
          setTokens(data.token);
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return httpService(originalRequest);
        }
      } catch (refreshError) {
        cookies.remove("token");
        cookies.remove("refreshToken");
        return Promise.reject(refreshError);
      }
    }

    if (statusCode >= 400) {
      const errorData = error?.response?.data;
      errorHandler[statusCode](errorData);
    } else {
      networkErrorStrategy();
    }

    return Promise.reject(error);
  },
);

async function apiBase<T>(
  url: string,
  options: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response.data as T;
}

async function readData<T>(url: string, headers?: any): Promise<T> {
  const options: any = {
    headers: headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
    data: data,
  };
  return await apiBase<TResult>(url, options);
}

export { createData, readData };
