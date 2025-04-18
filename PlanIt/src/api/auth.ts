import { api } from "./config";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    Token: string;
    user?: {
      id: string;
      email: string;
      name: string;
    };
  };
}

interface AuthApi {
  login: (data: LoginData) => Promise<LoginResponse>;
  logout: () => Promise<void>;
}

export const authApi: AuthApi = {
  login: (data: LoginData) => api.post<LoginResponse>("/login", data),
  logout: () => api.post("/logout"),
};
