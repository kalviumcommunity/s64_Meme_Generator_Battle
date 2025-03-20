import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import CreateMeme from "./pages/creatememe";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import BattleArena from "./pages/battelarena"; // ✅ Fixed case issue
import EntitiesPage from "./pages/enititiesPage"; 
import UpdateEntity from "./pages/UpdateEntity"; // ✅ Fixed file import issue

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creatememe" element={<CreateMeme />} />
          <Route path="/battelarena" element={<BattleArena />} />
          <Route path="/entity" element={<EntitiesPage />} />
          <Route path="/update-entity/:id" element={<UpdateEntity />} /> {/* ✅ Fixed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
