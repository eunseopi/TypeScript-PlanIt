import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input";
import Button from "../../../components/commons/Button/Button";
import * as auth from "../styles";

const FindPassword: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
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
      // TODO: Implement password recovery logic
      navigate("/auth/find-password/change-password");
    } catch (error) {
      console.error("Password recovery failed:", error);
    }
  };

  return (
    <auth.LoginContainer>
      <auth.Title>비밀번호 찾기</auth.Title>
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
          type="tel"
          name="phone"
          placeholder="휴대폰 번호"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="primary" size="large" fullWidth>
          다음
        </Button>
      </auth.Form>
      <auth.Links>
        <auth.Link onClick={() => navigate("/auth/find-account")}>
          계정 찾기
        </auth.Link>
        <auth.Link onClick={() => navigate("/login")}>로그인</auth.Link>
      </auth.Links>
    </auth.LoginContainer>
  );
};

export default FindPassword;
