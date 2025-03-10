import { useState } from "react";
import Register_body from "./body/BasicInform.jsx";
import EmailVerification from "./body/EmailVerification.jsx";
import ProfileSetting from "./body/ProfileSetting.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";

const register = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderBody = () => {
    switch (currentStep) {
      case 1:
        return <Register_body onNext={handleNext} />;
      case 2:
        return <EmailVerification onNext={handleNext} />;
      case 3:
        return <ProfileSetting onNext={handleNext} />;
      default:
        return <Register_body onNext={handleNext} />;
    }
  };

  return (
    <div>
      <Tabs
        currentStep={currentStep}
        steps={["기본 정보 입력", "이메일 인증", "프로필 설정"]}
      />
      {renderBody()}
    </div>
  );
};

export default register;
