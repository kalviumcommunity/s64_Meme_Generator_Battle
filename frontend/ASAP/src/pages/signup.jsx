// src/pages/Signup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Dummy signup logic (Replace with actual API call)
    if (email && password) {
      navigate("/dashboard");
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div className="signup-container">
  <div className="signup-card">
    <h2 className="signup-title">Create an Account</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSignup} className="space-y-4">
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="input-field"
      />
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </form>
    <p className="login-link">
      Already have an account? <span onClick={() => navigate('/login')}>Log In</span>
    </p>
  </div>
</div>

  );
};

export default Signup;