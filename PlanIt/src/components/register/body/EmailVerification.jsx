import styled from '@emotion/styled';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../commons/Button/Button.jsx'

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: -70px auto;
    
`;

const FormHeader = styled.div`
    display: flex;
    gap: 40px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const BackButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFF6FF;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 42px;
`;

const FormGroup = styled.div`
    margin-bottom: 24px;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    margin-left: 15px;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
    flex: 1;
    padding: 15px;
    width: 90%;
    border: 1px solid #E5E7EB;
    border-radius: 9999px;
    font-size: 14px;

    &::placeholder {
        color: #9CA3AF;
    }
`;

const VerifyButton = styled.button`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    padding: 8px;
    background-color: #DBEAFE;
    color: #2563EB;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
`;

const ResendText = styled.div`
    text-align: center;
    font-size: 14px;
    color: #4B5563;
    margin-bottom: 10px;
`;

const ResendButton = styled.button`
    border: none;
    border-bottom: 1px solid black;
    background: none;
    margin-left: 8px;
    cursor: pointer;
    font-size: 14px;
`;


const EmailVerification = ({ onNext }) => {
    const [formData, setFormData] = useState({
        email: '',
        verificationCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    const handleResend = () => {
        // 인증번호 재발송 로직 추가
    };

    return (
        <Container>
            <FormHeader>
                <Header>
                    <BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </BackButton>
                </Header>

                <Title>회원가입</Title>
            </FormHeader>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>이메일주소</Label>
                    <InputWrapper>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                        />
                        <VerifyButton type="button">인증하기</VerifyButton>
                    </InputWrapper>
                </FormGroup>

                <FormGroup>
                    <Label>인증번호 입력</Label>
                    <Input
                        type="text"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="메일 내 4자리 숫자를 입력해주세요"
                    />
                </FormGroup>

                <ResendText>
                    메일을 받지 못 하셨나요?
                    <ResendButton type="button" onClick={handleResend}>
                        재전송하기
                    </ResendButton>
                </ResendText>

                <Button variant="primary" size="large" fullWidth type="submit">다음으로</Button>
            </form>
        </Container>
    );
};

export default EmailVerification;