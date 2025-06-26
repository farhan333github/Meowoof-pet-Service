import React from 'react';
import './Header.css'; 
import irishimage from '../../assets/irishimage.png';
const Header = () => {
  return (
    <>
     <p className='text'>Find Your Furry Forever Friend</p>
     <div className="header">
      
      <img src={irishimage} alt="irishlogo" className='irishlogo' />
      <h1>Kitten & Cats <strong>-</strong> Puppies & Dogs</h1>
      <h2>For Sale in Ireland</h2>
      <p>
        Ireland's leading ethical website and mobile app for selling, breeding,<br />
        rehoming and adopting cats and dogs. Our easy-to-use platform also offers <br />
        access to vets and other pet services in your country, along with <br />
        <strong> MEOWOOF ALERT</strong>, Ireland's most effective lost and found pet alert system.
      </p>
    </div>
    </>
   
  );
};

export default Header;
