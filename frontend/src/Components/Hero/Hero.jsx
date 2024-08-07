import React from 'react';
import './Hero.css';
import arrow_icon from "../Assets/arrow-png.png";
import hero_image from "../Assets/hero.png";
import background_image from "../Assets/background1.png"; // Add the background image

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${background_image})` }}>
      <div className="hero-overlay">
        <div className="hero-left">
          <h2>Finding Your Perfect Shoes</h2>
          <div>
              <p>New</p>
            <p>Summer collections!</p> 
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
