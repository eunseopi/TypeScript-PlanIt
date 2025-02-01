import { useNavigate } from 'react-router-dom'
import * as login from "./styles"
import Button from '../../commons/Button/Button'
import Google from '../../../assets/Logo/google.svg'

const LoginBody = ({
    email,
    password,
    error,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    handleGoogleLogin
}) => {
    const navigate = useNavigate();

    return(
        <login.FormContainer>
            <login.Title>로그인/회원가입</login.Title>
            <login.FormWrapper>
                <form>
                    <login.Label htmlFor='login-email'>이메일(e-mail)</login.Label>
                    <login.FormBox>
                        <login.Input 
                            type='email'
                            id='login-email'
                            value={email} 
                            placeholder='가입 시 등록한 이메일을 입력해주세요' 
                            onChange={handleChangeEmail} 
                            required
                        />
                    </login.FormBox>
                </form>
                <form>
                    <login.Label htmlFor='login-pw'>비밀번호</login.Label>
                    <login.FormBox>
                        <login.Input 
                            type="password" 
                            id="login-pw"
                            value={password} 
                            placeholder='숫자+영문 10글자 조합입니다' 
                            onChange={handleChangePassword} 
                            required
                        />
                    </login.FormBox>
                </form>
            </login.FormWrapper>
            <login.ButtonWrapper>
                {error && <login.ErrorMessage>{error}</login.ErrorMessage>}
                <Button type="submit" variant='primary' size='large' fullWidth onClick={handleLogin}>로그인 하기</Button>
                <Button variant='secondary' size='large' onClick={() => navigate('/')}>이메일로 시작하기</Button>
                <Button variant='secondary' size='large' fullWidth onClick={handleGoogleLogin}>
                    <img src={Google} />
                    구글계정으로 시작하기
                </Button>
            </login.ButtonWrapper>
        </login.FormContainer>
    );
}

export default LoginBody;