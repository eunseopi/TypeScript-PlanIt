import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/reset_password_style";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 비밀번호 재설정 로직 구현
    navigate("/login");
  };

  return (
    <styles.Container>
      <styles.Title>비밀번호 재설정</styles.Title>
      <styles.Form onSubmit={handleSubmit}>
        <styles.Input
          type="password"
          name="password"
          placeholder="새 비밀번호"
          value={formData.password}
          onChange={handleChange}
        />
        <styles.Input
          type="password"
          name="confirmPassword"
          placeholder="새 비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Button variant="primary" size="large" type="submit">
          비밀번호 재설정
        </Button>
      </styles.Form>
    </styles.Container>
  );
};

export default ResetPassword;
