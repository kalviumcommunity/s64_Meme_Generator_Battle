// src/pages/CreateMeme.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './creatememe.css';

const CreateMeme = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState(null);
  let navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preview || !caption) {
      alert("Please upload an image and add a caption!");
      return;
    }
    // Placeholder for submitting the meme
    console.log("Meme Created:", { image: preview, caption });
    navigate("/battelarena");
  };

  return (
    <div className="create-meme-container">
    <div className="create-meme-card">
      <h1 className="create-meme-title">Create a Meme</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="file-upload">
          Click to Upload an Image
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        {preview && <img src={preview} alt="Meme Preview" className="meme-preview" />}
        <input
          type="text"
          placeholder="Enter a funny caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="input-caption"
        />
        <button type="submit" className="submit-meme-button" onClick={() => navigate('/battelarena')} >Submit Meme</button>
      </form>
    </div>
  </div>
  
  );
};

export default CreateMeme;
