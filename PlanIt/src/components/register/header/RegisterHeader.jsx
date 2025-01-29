import styled from '@emotion/styled'

const HeaderContainer = styled.div `
    display: flex;
    width: 90%;
    position : relative;
    margin: 60px auto;
`;

const Step = styled.div `
    flex: 1;
    text-align: center;
    color: #9CA3AF;
    position: relative;
    padding: 10px 0;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #E5E7EB;
    }
    
    ${props => props.active && `
        color: #3B82F6;
        font-weight: bold;
        
        &::after {
            background-color: #3B82F6;
        }
    `}
`;

const RegisterHeader = ({ currentStep = 1}) => {
    return (
        <div>
            <HeaderContainer>
                <Step active={currentStep === 1}>
                    기본 정보 입력
                </Step>
                <Step active={currentStep === 2}>
                    이메일 인증
                </Step>
                <Step active={currentStep === 3}>
                    프로필 설정
                </Step>
            </HeaderContainer>
        </div>
    )
}

export default RegisterHeader;