import LoginBody from "../components/login/body/LoginBody";
import LoginFooter from "../components/login/footer/LoginFooter";
import LoadingScreen from "../components/login/loading/LoadingScreen";
import useLogin from "../hooks/useLogin";
import LoginHeader from "../components/login/header/LoginHeader";

const Login = () => {
    const {loading, ...loginProps} = useLogin();

    return (
        <>
            {loading ? (
                <LoadingScreen {...loginProps}/>
            ):(
                <>
                    <LoginHeader />
                    <LoginBody {...loginProps}/>
                    <LoginFooter />
                </>
            )
        }
        </>
    )
}

export default Login;