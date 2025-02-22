import AuthLayout from "../components/auth/AuthLayout";
import LoginBody from "../components/auth/login/body/LoginBody";
import LoginFooter from "../components/auth/login/footer/LoginFooter";
import LoadingScreen from "../components/auth/login/loading/LoadingScreen";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const {loading, ...loginProps} = useLogin();

    return (
        <>
            {loading ? (
                <LoadingScreen {...loginProps}/>
            ):(
                <>
                    <AuthLayout title="로그인/회원가입">
                        <LoginBody {...loginProps}/>
                        <LoginFooter />
                    </AuthLayout>
                </>
            )
        }
        </>
    )
}

export default Login;