import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/inquiry_style";

const Inquiry: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: 문의 제출 로직 구현
      navigate("/");
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
    }
  };

  return (
    <styles.Container>
      <styles.Title>문의하기</styles.Title>
      <styles.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <Input
          type="text"
          name="subject"
          placeholder="제목"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
        />
        <styles.TextArea
          name="message"
          placeholder="문의 내용"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="primary" size="large" fullWidth>
          문의하기
        </Button>
      </styles.Form>
    </styles.Container>
  );
};

export default Inquiry;
