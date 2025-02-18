import styled from "@emotion/styled";

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    width: 100%;
    height: 55%;
    border-radius: 0 0 30px 30px;
    padding: 32px;
    margin: 0 auto;
`;

const LanguageOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 10px;
    margin: 8px auto;
    border-radius: 100px;
    border: 1px solid ${props => props.selected ? '#e0e0e0' : 'none'};
    cursor: pointer;
    color: black;
    font-size: 18px;
`;

const FlagOption = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Flag = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #f5f5f5;
    border-radius: 50%;
    font-size: 16px;
`;

const RadioButton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${props => props.selected ? '#3b82f6' : '#e0e0e0'};
    margin-left: auto;
    position: relative;

    &:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #3b82f6;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: ${props => props.selected ? 'block' : 'none'};
    }
`;

const ModalTitle = styled.h2`
    color: black;
    text-align: center;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: bold;
`;

const ModalSubTitle = styled.p`
    color: black;
    text-align: center;
    margin-bottom: 24px;
    font-size: 16px;
`;

export {
    LanguageOption,
    ModalContent,
    ModalTitle,
    ModalSubTitle,
    FlagOption,
    Flag,
    RadioButton
}