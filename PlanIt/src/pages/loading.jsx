import LoadingScreen from "../components/login/loading/LoadingScreen";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GoogleCallback = () => {
    const navigate = useNavigate();

    // 기존 유저 : 메인 페이지
    const handleHome = () => {
        navigate('/welcome');
        window.location.reload();
    }

    // 신규 유저 : ...? 일단 회원가입창
    const handleAccount = () => {
        navigate('/register');
    };

    // 현재 url에서 code 추출
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const handleLoginPost = async (code) => {
        if (!code) return; // code가 없으면 실행 안함

        try{
            // 백엔드 서버 열리면 다시 확인
            const response = await authApi.login({ data: { code } });
            const accessToken= response.data.Token;
            localStorage.setItem("token", accessToken); // 토큰 로컬스토리지에 저장
            // 기존/신규에 여부에 따라 페이지 이동

        } catch(error) {
            console.log("로그인 요청 오류", error);
        }   
    };

    useEffect(() => {
        if(code) {
            handleLoginPost(code);
        } else {
            console.error("OAuth 인증 코드 없음.")
        }
    })

    return <LoadingScreen />
}

export default GoogleCallback;