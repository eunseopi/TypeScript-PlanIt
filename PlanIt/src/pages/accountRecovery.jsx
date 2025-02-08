import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import AuthLayout from "../components/auth/AuthLayout";
import FindAccount from "../components/auth/findAccount/FindAccount";
import FindPassword from "../components/auth/findPassword/FindPassword";
import ChangePassword from "../components/auth/findPassword/ChangePassword";
import PasswordChanged from "../components/auth/findPassword/PasswordChanged";

const AccountRecovery = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNextStep = (data) => {
        if (step === 1) setEmail(data.email);
        setStep((prevStep) => prevStep + 1);
    }

    const getTitle = () => {
        switch (step) {
            case 1: 
                return '계정 찾기';
            case 2: 
                return '비밀번호 찾기';
            case 3:
                return '비밀번호 변경';
            default:
                return'';
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <FindAccount onNext={handleNextStep} />;
            case 2:
                return <FindPassword email={email} onNext={handleNextStep} />;
            case 3: 
                return <ChangePassword email={email} onNext={handleNextStep} />;
            case 4:
                return (
                    <AuthLayout hideHeader hideTitle>
                        <PasswordChanged onReturn={() => navigate('/login')}/>
                    </AuthLayout>
                );
        }
    }

    return step === 4 ? (
        renderStep()
    ) : (
        <AuthLayout title={getTitle()}>
            {renderStep()}
        </AuthLayout>
    )

}

export default AccountRecovery;