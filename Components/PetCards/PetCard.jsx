import React from "react";
import "./PetCard.css";
import petImage1 from "../../assets/petimage1.png"; 

const PetCard = () => {
  return (
    <div className="pet-card">
      <img src={petImage1} alt="Pet" className="pet-image" />
      <div className="heart">
        <i class="fa-regular fa-heart"></i>
      </div>
      
      <div className="pet-details">
        <h3 className="pet-title">
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
  );
};

export default PetCard;

