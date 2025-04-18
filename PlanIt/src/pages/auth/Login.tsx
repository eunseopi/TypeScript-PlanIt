import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/commons/Input/Input";
import Button from "../../components/commons/Button/Button";
import * as auth from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement login logic
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <auth.LoginContainer>
      <auth.Title>로그인</auth.Title>
      <auth.Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="primary" size="large" fullWidth>
          로그인
        </Button>
      </auth.Form>
      <auth.Links>
        <auth.Link onClick={() => navigate("/auth/find-account")}>
          계정 찾기
        </auth.Link>
        <auth.Link onClick={() => navigate("/auth/find-password")}>
          비밀번호 찾기
        </auth.Link>
        <auth.Link onClick={() => navigate("/register")}>회원가입</auth.Link>
      </auth.Links>
    </auth.LoginContainer>
  );
};

export default Login;
