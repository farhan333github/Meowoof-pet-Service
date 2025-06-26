import React from "react";
import "./ServicesAds.css";

const ServicesAds = () => {
  return (
    <div className="ServicesAds">
      <div className="service-card">
         <img src="src/assets/Adimage.png" alt="Pet" className="pet-image" />
        <div className="service-info">
          <h3 className="service-title">Pet Grooming Service</h3>
          <p className="location">Dublin, Ireland</p>
          <p><strong>Published:</strong> 2 hours ago</p>
          <p><strong>Type:</strong> Full grooming package</p>
          <p><strong>Price:</strong> $40 per session</p>
          <p><strong>Available for:</strong> Cats and Dogs</p>
        </div>
        <button className="view-btn">View Details</button>
      </div>
    </div>
  );
};

export default ServicesAds;
