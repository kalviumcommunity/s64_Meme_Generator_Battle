import { useState } from "react";
import { motion } from "framer-motion";
import "./battlearena.css";

const memes = [
  { id: 1, src: "https://www.tubefilter.com/wp-content/uploads/2023/12/skibidi-toilet-top-2023-1920x1131.jpg", caption: "When code finally works!" },
  { id: 2, src: "https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_925,h_529,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png", caption: "Debugging like a pro!" },
  { id: 3, src: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6438793/this-is-fine.jpg?quality=90&strip=all&crop=8.3333333333333%2C0%2C83.333333333333%2C100&w=1080", caption: "Me after 1 hour of CSS..." },
  { id: 4, src: "https://www.tubefilter.com/wp-content/uploads/2023/12/skibidi-toilet-top-2023-1920x1131.jpg", caption: "React re-renders got me like..." }
];

const BattleArena = () => {
  const [battleMemes, setBattleMemes] = useState(getRandomMemes());
  const [winner, setWinner] = useState(null);

  function getRandomMemes() {
    const shuffled = [...memes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  const handleVote = (memeId) => {
    setWinner(memeId);
    setTimeout(() => {
      setBattleMemes(getRandomMemes());
      setWinner(null);
    }, 2000);
  };

  return (
    <div className="battle-arena-container">
      <h1 className="battle-title">🔥 Meme Battle Arena 🔥</h1>
      <p className="battle-subtitle">Vote for the best meme!</p>

      <div className="battle-memes">
        {battleMemes.map((meme) => (
          <motion.div
            key={meme.id}
            className={`meme-card ${winner === meme.id ? "winner-glow" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleVote(meme.id)}
          >
            <img src={meme.src} alt={meme.caption} className="meme-image" />
            <p className="meme-caption">{meme.caption}</p>
          </motion.div>
        ))}
      </div>

      {winner && <p className="winner-text">🎉 Meme {winner} Wins! 🎉</p>}
    </div>
  );
};

export default BattleArena;
