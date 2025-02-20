import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [memes, setMemes] = useState([]);
  const [user, setUser] = useState({
    username: "MemeMaster99",
    avatar: "https://i.pravatar.cc/150?img=3",
    matchesPlayed: 10,
    status: "Active",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch memes from backend (Dummy data for now)
    setMemes([
      { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR9Jz6xUCXTN7ssNt3854QwmhbBJWKb4Fkw&s", caption: "Funny Meme 1" },
      { id: 2, image: "https://www.usatoday.com/gcdn/-mm-/20c093fe801d2b72abf76b7c532205259191faf9/c=73-0-522-599/local/-/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-3660-funny-parenting-memes-26-1.png?width=449&height=599&fit=crop&format=pjpg&auto=webp", caption: "Hilarious Meme 2" },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      {/* User Profile Section */}
      <div className="user-profile">
        <img src={user.avatar} alt="User Avatar" className="user-avatar" />
        <h2 className="username">{user.username}</h2>
        <p className="matches-played">Matches Played: <span>{user.matchesPlayed}</span></p>
        <p className={`status ${user.status.toLowerCase()}`}>{user.status}</p>
      </div>

      {/* Meme Battle Dashboard */}
      <div className="dashboard-card">
        <h1 className="dashboard-title">🔥 Meme Battle Dashboard 🔥</h1>
        <button 
          onClick={() => navigate("/creatememe")}
          className="create-meme-button"
        >
          Create a Meme
        </button>
        
        <h2 className="recent-memes-title">Recent Memes</h2>
        <div className="meme-grid">
          {memes.length > 0 ? (
            memes.map((meme) => (
              <div key={meme.id} className="meme-card">
                <img src={meme.image} alt={meme.caption} className="meme-image" />
                <p className="meme-caption">{meme.caption}</p>
              </div>
            ))
          ) : (
            <p className="no-memes-text">No memes available. Start creating!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
