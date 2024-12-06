import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientProfile from "./pages/PatientProfile";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
