import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import passport from "../../assets/Passport.png"
import { keyframes } from "@emotion/react";

const rotate = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #3b82f6;
    text-align: center;
    color: white;
`;

const Image = styled.img`
    width: 300px;
    margin-bottom: 24px;
    animation : ${rotate} 5s ease-in-out infinite;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const Subtitle = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
`;

const Button = styled.button`
    background: white;
    color: black;
    padding: 12px 24px;
    width: 80%;
    border-radius: 24px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={passport} alt="Passport Icon" />
            <Title>환영합니다!</Title>
            <Subtitle>플랜잇과 함께 여행 플랜을 준비해요</Subtitle>
            <Button onClick={() => navigate("/")}>돌아가기</Button>
        </Container>
    );
}

export default WelcomeScreen;
