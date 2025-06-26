import React from "react";
import "./VetAds.css";
import AdImage from "../../assets/Adimage.png";

const VetAds = () => {
  return (
    <>
      <div className="Vet-Ads">
        <img src={AdImage} alt="Pet" className="pet-image" />
        <div>
          <h3 className="CatTitle">
            Beautiful IKC Registered <span className="price">$500</span>
          </h3>
          <p className="location">Galway, Ireland</p>
          <p><strong>Published :</strong> 1 hour ago</p>
          <p><strong>Breed:</strong> Bulldog</p>
          <p><strong>Age :</strong> 1 month and 3 weeks</p>
          <p><strong>Available sex :</strong> 1 Male and 2 Female</p>
        </div>
        <button className="view-btn">View Details</button>
      </div>
    </>
  );
};

export default VetAds;
