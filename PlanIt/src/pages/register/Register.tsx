import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInform from "./body/BasicInform";
import WelcomeScreen from "./WelcomeScreen";

interface FormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsAgreed: boolean;
  privacyAgreed: boolean;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
    termsAgreed: false,
    privacyAgreed: false,
  });

  const handleNext = (data: FormData) => {
    setFormData(data);
    setStep(2);
  };

  const handleComplete = () => {
    navigate("/login");
  };

  return (
    <>
      {step === 1 && <BasicInform onNext={handleNext} />}
      {step === 2 && <WelcomeScreen onComplete={handleComplete} />}
    </>
  );
};

export default Register;
