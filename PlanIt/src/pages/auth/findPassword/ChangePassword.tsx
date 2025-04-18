import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input";
import Button from "../../../components/commons/Button/Button";
import * as auth from "../styles";

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
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
    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      // TODO: Implement password change logic
      navigate("/auth/find-password/password-changed");
    } catch (error) {
      console.error("Password change failed:", error);
    }
  };

  return (
    <auth.LoginContainer>
      <auth.Title>비밀번호 변경</auth.Title>
      <auth.Form onSubmit={handleSubmit}>
        <Input
          type="password"
          name="password"
          placeholder="새 비밀번호"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="새 비밀번호 확인"
          value={formData.passwordConfirm}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="primary" size="large" fullWidth>
          변경
        </Button>
      </auth.Form>
    </auth.LoginContainer>
  );
};

export default ChangePassword;
