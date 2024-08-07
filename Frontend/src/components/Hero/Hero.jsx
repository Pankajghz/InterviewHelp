import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="hero bg-white flex flex-col md:flex-row p-8 lg:p-16 xl:p-24 mt-8 md:mt-12 lg:mt-16 xl:mt-24">
      {/* Image Container */}
      <div className="hero-image flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src="/Images/hero.png" // Adjust the path based on your file structure
          alt="Video Conference"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>
      {/* Content Container */}
      <div className="hero-content flex flex-col justify-center md:ml-8 lg:ml-12 xl:ml-16">
        <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 mb-4">
          Ace Your Interviews with Expert Guidance
        </h1>
        <p className="hero-subtitle text-base md:text-lg lg:text-xl xl:text-2xl mb-6 text-gray-700">
          Resume Building, Mock Interviews, Referrals, and DSA Preparations
        </p>
        <div className="hero-buttons flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="hero-button bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700">
            Learn More
          </button>
          <button className="hero-button bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
