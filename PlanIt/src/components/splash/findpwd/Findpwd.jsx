import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../commons/Button/Button.jsx'
import * as findPwd from './findpwd.js'
import ResendPopup from "./ResendPopup.jsx";
import {useNavigate} from "react-router-dom";


const Findpwd = () => {
    const [formData, setFormData] = useState({
        email: '',
        verificationCode: ''
    });

    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false);
    const [showResendPopup, setShowResendPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 인증번호 전송 로직 추후 추가
        setIsSent(true);
    };

    const handleResend = () => {
        // 인증번호 재발송 로직 추가
        setShowResendPopup(true);
    };

    const handleClosePopup = () => {
        setShowResendPopup(false);
    }

    const handleResendCode = () => {
        setShowResendPopup(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <findPwd.Container>
            <findPwd.FormHeader>
                <findPwd.Header>
                    <findPwd.BackButton>
                        <ChevronLeft onClick={handleBackButton} size={20} color="#4B5563" />
                    </findPwd.BackButton>
                </findPwd.Header>

                <findPwd.Title>비밀번호 찾기</findPwd.Title>
            </findPwd.FormHeader>
            <form onSubmit={handleSubmit}>
                <findPwd.FormGroup>
                    <findPwd.Label>이메일주소</findPwd.Label>
                    <findPwd.InputWrapper>
                        <findPwd.Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                        />
                    </findPwd.InputWrapper>
                </findPwd.FormGroup>

                <findPwd.FormGroup>
                    <findPwd.Label>인증번호 입력</findPwd.Label>
                    <findPwd.Input
                        type="text"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="메일 내 4자리 숫자를 입력해주세요"
                    />
                </findPwd.FormGroup>

                <findPwd.ResendText>
                    메일을 받지 못 하셨나요?
                    <findPwd.ResendButton type="button" onClick={handleResend}>
                        재전송하기
                    </findPwd.ResendButton>
                </findPwd.ResendText>


                {isSent ? (
                    <>
                        <findPwd.sendBtn>
                            <Button style={{ border: "none", backgroundColor: "#d9d9d9", color:"#c1c1c1"}} variant="secondary" size="large" fullWidth>
                                전송완료
                            </Button>
                            <Button variant="primary" size="large" fullWidth>
                                다음으로
                            </Button>
                        </findPwd.sendBtn>
                    </>
                ) : (
                    <findPwd.nextButton>
                        <Button variant="primary" size="large" fullWidth type="submit">인증번호 전송</Button>
                    </findPwd.nextButton>
                )}
            </form>

            {showResendPopup && (
                <ResendPopup
                    email={formData.email}
                    onClose={handleClosePopup}
                    onResend={handleResendCode}
                />
            )}
        </findPwd.Container>
    );
};

export default Findpwd;