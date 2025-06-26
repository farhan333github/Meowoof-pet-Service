// import React from 'react';
// import './DownloadApp.css';

// import googlePlay from '../../assets/imagegoogle.png';
// import appStore from '../../assets/imageappstore.png';
// import phonesimagesss from '../../assets/Mobilephones.png'; 

// const DownloadApp = () => {
//   return (
//     <div className="download-section">
//       <div className="text-content">
//         <h2>Download the app for an enhanced experience.</h2>
//         <p>
//           Browse through thousands of listings for cats, dogs,
//         <p>dogs,vets and pet services</p>
          
//         </p>
//         { <div className="store-buttons">
//           <img src={Googleplay} alt="Google Play" />
//           <img src={Appstore} alt="App Store" />
//         </div> }
//       </div>
//       { <div className="image-content">
//         <img src={Mobilephones} alt="App preview on mobile phones" />
//       </div> }
//     </div>
//   );
// };

// export default DownloadApp;



// import React from 'react';
// import './DownloadApp.css';

// import googlePlay from '../../assets/imagegoogle.png';
// import appStore from '../../assets/imageappstore.png';
// import phonesimagesss from '../../assets/Mobilephones.png'; 

// const DownloadApp = () => {
//   return (
//     <div className="download-section">
//       <div className="text-content">
//         <h2>Download the app for an enhanced experience.</h2>
//         <p>
//           Browse through thousands of listings for cats, dogs,
//           vets and pet services.
//         </p>
        
//         <div className="store-buttons">
//             <img src={phonesimagesss} alt="phonesimage" />
//           <img src={imagegoogle} alt="googlePlay" />
//           <img src={imageappStore} alt="appStore" />
//         </div>
//       </div>

//       <div className="image-content">
//         <img src={mobilePhones} alt="App preview on mobile phones" />
//       </div>
//     </div>
//   );
// };

// export default DownloadApp;









import React from 'react';
import './DownloadApp.css';

import googlePlay from '../../assets/imagegoogle.png';
import appStore from '../../assets/imageappstore.png';
import phonesImage from '../../assets/Mobilephones.png'; 

const DownloadApp = () => {
  return (
    <div className="download-section">
      <div className="text-content">
        <h2>Download the app for an enhanced experience.</h2>
        <p>
          Browse through thousands of listings for cats, dogs,
        </p>
        <p>dogs, vets and pet services</p>

        <div className="store-buttons">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>

      <div className="image-content">
        <img src={phonesImage} alt="App preview on mobile phones" />
      </div>
    </div>
  ); 
};

export default DownloadApp;
