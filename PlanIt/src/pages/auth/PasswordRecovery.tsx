import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button/Button";
import * as auth from "./styles";

const PasswordRecovery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <auth.LoginContainer>
      <auth.Title>비밀번호 복구</auth.Title>
      <auth.Content>
        <p>비밀번호 복구가 완료되었습니다.</p>
        <p>이제 로그인하실 수 있습니다.</p>
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

export default PasswordRecovery;
