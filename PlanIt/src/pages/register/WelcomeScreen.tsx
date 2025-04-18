import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button/Button";
import * as welcome from "./styles/welcome_style";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const navigate = useNavigate();

  return (
    <welcome.Container>
      <welcome.Header>
        <welcome.Title>환영합니다!</welcome.Title>
        <welcome.Subtitle>
          회원가입이 완료되었습니다.
          <br />
          이제 PlanIt을 시작해보세요.
        </welcome.Subtitle>
      </welcome.Header>
      <welcome.ImageContainer>
        <welcome.Image src="/images/welcome.png" alt="Welcome" />
      </welcome.ImageContainer>
      <welcome.ButtonContainer>
        <Button variant="primary" size="large" fullWidth onClick={onComplete}>
          시작하기
        </Button>
      </welcome.ButtonContainer>
    </welcome.Container>
  );
};

export default WelcomeScreen;
