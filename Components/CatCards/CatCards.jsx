// import React from "react";
// import "./CatCards.css";
 

// const CatCards = () => {
//   return (
//     <div className="Cat-Card">
//       <img src={petImage1} alt="Pet" className="pet-image" />
      
//       <div className="CatCards">
//         <h3 className="CatTitle">
//           Beautiful IKC Registered <span className="price">$500</span>
//         </h3>
//         <p className="location">Galway, Ireland</p>

//         <p><strong>Published :</strong> 1 hour ago</p>
//         <p><strong>Breed:</strong> Bulldog</p>
//         <p><strong>Age :</strong> 1 month and 3 weeks</p>
//         <p><strong>Available sex :</strong> 1 Male and 2 Female</p>
//       </div>

//       <button className="view-button">View Details</button>
//     </div>
//   );
// };

// export default CatCards;







// import React from "react";
// import "./CatCards.css";


// const CatCards = () => {
//   return (
//     <div className="Cat-Card">
//       <img src={petImage1} alt="Pet" className="pet-image" />
      
//       <div className="CatCards">
//         <h3 className="CatTitle">
//           Beautiful IKC Registered <span className="price">$500</span>
//         </h3>
//         <p className="location">Galway, Ireland</p>
//         <p><strong>Published :</strong> 1 hour ago</p>
//         <p><strong>Breed:</strong> Bulldog</p>
//         <p><strong>Age :</strong> 1 month and 3 weeks</p>
//         <p><strong>Available sex :</strong> 1 Male and 2 Female</p>
//       </div>

//       <button className="view-button">View Details</button>
//     </div>
//   );
// };

// export default CatCards;










import React from "react";
import "./CatCards.css";
// import CatImage2 from "../assets/cat.png";

const CatCards = () => {
  return (
    <div className="Cat-Card">
      <img src="/src/assets/catimage2.png" alt="Pet" className="pet-image" />
      <div className="hearts">
       <i class="fa-regular fa-heart"></i>
      </div>
      <div className="CatCards">
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
  );
};

export default CatCards;

