import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  width: 90%;
  position: relative;
  margin: 60px auto;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  color: #9ca3af;
  position: relative;
  padding: 10px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e5e7eb;
  }

  ${(props) =>
    props.active &&
    `
        color: #3B82F6;
        font-weight: bold;
        
        &::after {
            background-color: #3B82F6;
        }
    `}
`;

const Tabs = ({ currentStep = 1, steps = [] }) => {
  return (
    <div>
      <HeaderContainer>
        {steps.map((step, index) => (
          <Step key={index} active={currentStep === index + 1}>
            {step}
          </Step>
        ))}
      </HeaderContainer>
    </div>
  );
};

export default Tabs;
