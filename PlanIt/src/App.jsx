import Register from "./pages/register/Regitser.jsx";
import Login from "./pages/auth/Login.jsx";
import AccountRecovery from "./pages/auth/accountRecovery.jsx";
import PasswordRecovery from "./pages/auth/PasswordRecovery.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/register/WelcomeScreen.jsx";
import "./styles/App.css";
import SplashPage from "./pages/splash/SplashPage.jsx";
import Inquiry from "./pages/splash/inquiry/Inquiry.jsx";
import Findpwd from "./pages/splash/findpwd/Findpwd.jsx";
import Community from "./pages/community/Community.jsx";
import { Provider } from "react-redux";
import PostRoutes from './routes/post.jsx';
import { store } from "./pages/community/storage/commuStore/store.js";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Community />} />
                    {/* <Route path="/" element={<SplashPage/>}/> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/findAccount" element={<AccountRecovery />} />
                    <Route path="/findPW" element={<PasswordRecovery />} />
                    <Route path="/inquiry" element={<Inquiry />} />
                    <Route path="/password" element={<Findpwd />} />
                    <Route path="/welcome" element={<WelcomeScreen />} />
                    <Route path='/post/*' element={<PostRoutes />} />
                    {/* <Route path="/" element={<Register />} /> */}
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
