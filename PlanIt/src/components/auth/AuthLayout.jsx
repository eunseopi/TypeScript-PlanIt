import styled from "styled-components";
import LoginHeader from './login/header/LoginHeader';

const AuthContainer = styled.div`
    padding: 47px 44px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 94px);
`

const AuthTitle = styled.h1`
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
`

const AuthBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 62vh;
`

const AuthLayout = ({ hideHeader = false, title, hideTitle = false, children }) => {
    return(
        <AuthContainer>
            {!hideHeader && <LoginHeader />}
            {!hideTitle && <AuthTitle>{title}</AuthTitle>}
            <AuthBody>{children}</AuthBody>
        </AuthContainer>
    )
}

export default AuthLayout;