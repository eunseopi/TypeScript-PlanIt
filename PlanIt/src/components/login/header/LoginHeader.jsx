import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';

const HeaderBox = styled.div`
    max-width: 540px;
    padding: 20px;
    margin: 0 auto;
`

const PrevButton = styled.button`
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

const LoginHeader = () => {
    const navigate = useNavigate();

    return (
        <HeaderBox>
            <PrevButton onClick={() => navigate(-1)}>
                <ChevronLeft size={20} color="#4B5563" />
            </PrevButton>
        </HeaderBox>
    )
}

export default LoginHeader;