import { useNavigate } from "react-router-dom";
import * as login from "./styles";
import Button from "../../../../components/commons/Button/Button";
import Input from "../../../../components/commons/Input";
import Google from "../../../../assets/Logo/google.svg";

interface LoginBodyProps {
  email: string;
  password: string;
  error: string | null;
  handleChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleGoogleLogin: () => void;
}

const LoginBody = ({
  email,
  password,
  error,
  handleChangeEmail,
  handleChangePassword,
  handleLogin,
  handleGoogleLogin,
}: LoginBodyProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <login.FormWrapper>
        <Input
          id="login-email"
          label="이메일(e-mail)"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="가입 시 등록한 이메일을 입력해주세요."
          hasError={
            error &&
            (error.includes("이메일") || error.includes("올바른 이메일 형식"))
          }
          required
        />
        <Input
          id="login-pw"
          label="비밀번호"
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="10자 이상 영문, 특수문자, 숫자 등 2가지 조합"
          hasError={error && error.includes("비밀번호")}
          required
        />
      </login.FormWrapper>
      <login.ButtonWrapper>
        {error && <login.ErrorMessage>{error}</login.ErrorMessage>}
        <Button type="submit" variant="primary" size="large" fullWidth>
          로그인 하기
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="large"
          onClick={() => navigate("/")}
        >
          이메일로 시작하기
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="large"
          fullWidth
          onClick={handleGoogleLogin}
        >
          <img src={Google} alt="구글 로고" />
          구글계정으로 시작하기
        </Button>
      </login.ButtonWrapper>
    </form>
  );
};

export default LoginBody;
