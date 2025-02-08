import Register from './pages/regitser.jsx'
import Login from './pages/login.jsx';
import AccountRecovery from './pages/accountRecovery.jsx';
import PasswordRecovery from './pages/PasswordRecovery.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/register/WelcomeScreen.jsx";
import "./styles/App.css"

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/findAccount' element={<AccountRecovery />} />
            <Route path='/findPW' element={<PasswordRecovery />} />
            <Route path="/welcome" element={<WelcomeScreen/>} />
            <Route path="/" element={<Register/>} />
        </Routes>
    </Router>
  )
}

export default App;
