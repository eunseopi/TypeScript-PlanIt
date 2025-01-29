import { useState } from 'react'
import Register_header from "../components/register/header/RegisterHeader.jsx";
import Register_body from "../components/register/body/BasicInform.jsx"
import EmailVerification from "../components/register/body/EmailVerification.jsx";
import ProfileSetting from "../components/register/body/ProfileSetting.jsx";


const register = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    }

    const renderBody = () => {
        switch(currentStep) {
            case 1:
                return <Register_body onNext={handleNext}/>;
            case 2:
                return <EmailVerification onNext={handleNext}/>;
            case 3:
                return <ProfileSetting onNext={handleNext}/>;
            default:
                return <Register_body onNext={handleNext}/>;
        }
    }


    return(
        <div>
            <Register_header currentStep={currentStep}/>
            {renderBody()}
        </div>
    )
}

export default register;