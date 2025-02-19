import React from "react";
import LandingPage from "./pages/LandingPage";
import "./pages/LandingPage.css";
import Entity from "./components/Entity";

const App = () => {
  return (
    <div className="container">
      <LandingPage />
      <Entity />
    </div>
  );
};

export default App;


