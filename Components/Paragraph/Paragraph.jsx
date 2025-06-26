import React from "react";
import "./Paragraph.css";
import appstore from "../../assets/Appstore.png";
import playstore from "../../assets/Googleplay.png";

const Paragraph = () => {
  return (
    <div className="paragraph-container">
      <p className="paragraph-text">
        Download the app for an enhanced experience. Browse <br />
        through thousands of listings for cats, dogs, vets, and pet 
        services.
      </p>
      <div className="store-icons">
        <img src={appstore} alt="App Store" className="store-image" />
        <img src={playstore} alt="Play Store" className="store-image" />
      </div>
    </div>
  );
};

export default Paragraph;

