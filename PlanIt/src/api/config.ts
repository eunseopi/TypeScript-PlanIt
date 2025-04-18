import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const API_URL = "http://localhost:3000";

interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: InternalAxiosRequestConfig;
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      const errorResponse: ApiError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      };

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      return Promise.reject(errorResponse);
    }
  );

  return instance;
};

export const api = createAxiosInstance();
