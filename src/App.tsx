import "./App.css";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientProfile from "./pages/PatientProfile";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import WIPPage from "./pages/WIPPage";
import DietitianProfile from "./pages/DietitianProfile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wip" element={<WIPPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/dietitian-profile" element={<DietitianProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
