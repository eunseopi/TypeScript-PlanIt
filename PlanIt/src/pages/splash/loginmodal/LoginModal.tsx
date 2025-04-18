import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/login_modal_style";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
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
      // TODO: 로그인 로직 구현
      onClose();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <styles.ModalOverlay>
      <styles.Modal>
        <styles.CloseButton onClick={onClose}>×</styles.CloseButton>
        <styles.Title>로그인</styles.Title>
        <styles.Form onSubmit={handleSubmit}>
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
        </styles.Form>
        <styles.Links>
          <styles.Link onClick={() => navigate("/auth/find-account")}>
            계정 찾기
          </styles.Link>
          <styles.Link onClick={() => navigate("/auth/find-password")}>
            비밀번호 찾기
          </styles.Link>
          <styles.Link onClick={() => navigate("/register")}>
            회원가입
          </styles.Link>
        </styles.Links>
      </styles.Modal>
    </styles.ModalOverlay>
  );
};

export default LoginModal;
