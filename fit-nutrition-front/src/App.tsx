import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PatientProfile from "./pages/PatientProfile";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
