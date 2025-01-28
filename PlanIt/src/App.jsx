import Register from './pages/regitser.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/register/WelcomeScreen.jsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/welcome" element={<WelcomeScreen/>} />
        </Routes>
    </Router
    >
  )
}

export default App;
