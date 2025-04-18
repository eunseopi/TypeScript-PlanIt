import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commons/Button/Button";
import * as auth from "../styles";

const PasswordChanged: React.FC = () => {
  const navigate = useNavigate();

  return (
    <auth.LoginContainer>
      <auth.Title>비밀번호 변경 완료</auth.Title>
      <auth.Content>
        <p>비밀번호가 성공적으로 변경되었습니다.</p>
        <p>새로운 비밀번호로 로그인해주세요.</p>
      </auth.Content>
      <Button
        variant="primary"
        size="large"
        fullWidth
        onClick={() => navigate("/login")}
      >
        로그인
      </Button>
    </auth.LoginContainer>
  );
};

export default PasswordChanged;
