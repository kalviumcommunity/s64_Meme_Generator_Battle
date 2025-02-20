// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    
    // Dummy authentication logic (Replace with actual API call)
    if (email === "test@example.com" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
  <div className="login-card">
    <h2 className="login-title">Welcome Back</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input-field"
      />
      <button type="submit" className="login-button">
        Log In
      </button>
    </form>
    <p className="signup-link">
      Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
    </p>
  </div>
</div>

  );
};

export default Login;
