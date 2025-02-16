import Register from './pages/regitser.jsx'
import Login from './pages/login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/register/WelcomeScreen.jsx";
import "./styles/App.css"
import GoogleCallback from './pages/loading.jsx';
import SplashPage from "./pages/SplashPage.jsx";
import Inquiry from "./components/splash/inquiry/Inquiry.jsx"
import Findpwd from "./components/splash/findpwd/Findpwd.jsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<SplashPage/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/inquiry' element={<Inquiry/>} />
            <Route path='/password' element={<Findpwd/>} />
            {/* <Route path='/googleCallBack' element={<GoogleCallback />}/> */}
            <Route path="/welcome" element={<WelcomeScreen/>} />
        </Routes>
    </Router>
  )
}

export default App;
