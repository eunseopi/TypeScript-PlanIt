import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/auth";

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

interface UseLoginReturn {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => Promise<void>;
  handleGoogleLogin: () => void;
  handleLogout: () => void;
}

const useLogin = (): UseLoginReturn => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("TokenExpiry");

    console.log("현재 token", token);
    console.log("현재 tokenExpiry", tokenExpiry);

    if (!token || !tokenExpiry || Number(tokenExpiry) < Date.now()) {
      console.log("Access Token 만료됨, 로그인 필요");
      localStorage.removeItem("token");
      localStorage.removeItem("TokenExpiry");

      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    } else {
      console.log("자동 로그인 성공: 토큰 유효");
    }
  }, [navigate]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value.trim());
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value.trim());

  const handleLogin = async (): Promise<void> => {
    if (error) setError(null);

    if (!email.trim() || !password.trim()) {
      setError("이메일 혹은 패스워드를 입력해주세요.");
      return;
    }

    if (!email.includes("@")) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    setLoading(true);

    try {
      const response = (await authApi.login({
        email,
        password,
      })) as LoginResponse;

      localStorage.setItem("token", response.data.Token);
      localStorage.setItem(
        "TokenExpiry",
        String(Date.now() + 24 * 60 * 60 * 1000)
      );

      navigate("/welcome");
    } catch (error) {
      setError("아이디나 비밀번호를 다시 확인해주세요.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = (): void => {
    try {
      const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      const googleAuthUrl =
        "https://accounts.google.com/o/oauth2/v2/auth?" +
        `client_id=${GOOGLE_CLIENT_ID}` +
        "&response_type=code" +
        "&scope=email profile" +
        "&redirect_uri=http://localhost:5173";

      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = (): void => {
    ["token", "user", "TokenExpiry"].forEach((item) =>
      localStorage.removeItem(item)
    );
    navigate("/login");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    setLoading,
    error,
    setError,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };
};

export default useLogin;
