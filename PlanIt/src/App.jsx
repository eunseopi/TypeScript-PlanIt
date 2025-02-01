import Register from './pages/regitser.jsx'
import Login from './pages/login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/register/WelcomeScreen.jsx";
import "./styles/App.css"
import GoogleCallback from './pages/loading.jsx';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Register/>} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/googleCallBack' element={<GoogleCallback />}/> */}
            <Route path="/welcome" element={<WelcomeScreen/>} />
        </Routes>
    </Router>
  )
}

export default App;
