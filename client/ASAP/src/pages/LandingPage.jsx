import React from "react";

const LandingPage = () => {
    return (
        <div className="gh" >
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-5xl font-extrabold text-center mb-4 drop-shadow-lg">
        Meme Generator Battle
      </h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Unleash your creativity! Generate memes, battle for the top spot, and let the internet decide the ultimate meme champion!
      </p>
      <button className="bg-yellow-400 text-black px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
        Get Started
      </button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Meme Creation" description="Upload images, add captions, and create hilarious memes." />
        <FeatureCard title="Battle Arena" description="Submit your meme and compete against others for the top spot." />
        <FeatureCard title="User Profiles" description="Create and customize your own profile and track your wins." />
      </div>
    </div>
    </div>
  );
};


const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-64 text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};


export default LandingPage;
