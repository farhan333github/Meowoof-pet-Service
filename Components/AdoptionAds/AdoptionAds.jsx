import React from "react";
import "./AdoptionAds.css";

const AdoptionAds = () => {
  return (
    <div className="AdoptionAds">
      <div className="Cat-Card">
        <img src="/src/assets/catimage2.png" alt="Pet for Adoption" className="pet-image" />

        <div className="CatCards">
          <h3 className="CatTitle">
            Adorable Cat Ready for Adoption
          </h3>
          <p className="location">Galway, Ireland</p>
          <p><strong>Published:</strong> 1 hour ago</p>
          <p><strong>Breed:</strong> Domestic Shorthair</p>
          <p><strong>Age:</strong> 1 month and 3 weeks</p>
          <p><strong>Available Sex:</strong> 1 Male and 2 Female</p>
          <p className="adoption-fee"><strong>Adoption Fee:</strong> Free</p>
        </div>

        <button className="view-btn">Adopt Me</button>
      </div>
    </div>
  );
};

export default AdoptionAds;
