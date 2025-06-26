// import React from 'react'
// import "./Navbar.css"
// import Navlogo from '../../assets/Navlogo.png';
// const Navbar = () => {
//   return (
//     <div>
//        <div className="navbar">
//         <div className="navbar-2">
//           <div className="navbar3">
//       <h2>meowoof</h2>
//       <p>Find Your Furry Forever Friend</p>
//       </div>
//       <ul>
//         <li><a href="#">Meowoof Alert</a></li>
//         <li><a href="#">Post an Ad</a></li>
//         <li><a href="#">Registeration</a></li>
//         <li><a href="#" className='login'>Login</a></li>
//       </ul>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Navbar





// import React from 'react';
// import "./Navbar.css";
// import meowoofLogo from '../../assets/meowoof logo.png';
// import Vectorimage from '../../assets/Vectorimage (1).png';

// import postanadimg from '../../assets/postanadimg.png';

// const Navbar = () => {
  
//   return (
//     <div>
//       <div className="navbar">
//         <div className="navbar-2">
//           <div className="navbar3">
          
//             <img src={meowoofLogo} alt="Meowoof Logo" className="navbar-logo" />
             
//             <div>
//             </div>
//           </div>
//           <ul>
//             <li>
//                <img src={Vectorimage } alt="vector image logo" className='vectorlogo' />
//                <a href="#">Meowoof Alert</a>
//             </li>
//             <li>
//                <img src={postanadimg} alt="postanad logo" className="postanad-icon" />
//                <a href="#">Post an Ad</a>
//             </li>
//             <li>
              
//             </li>
           
           
//             <li><a href="#">Registeration</a></li>
//            <li><button className="login">Login</button></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;










import React, { useState } from 'react';
import "./Navbar.css";
import meowoofLogo from '../../assets/meowoof logo.png';
import Vectorimage from '../../assets/Vectorimage (1).png';
import postanadimg from '../../assets/postanadimg.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-2">
        <div className="navbar3">
          <img src={meowoofLogo} alt="Meowoof Logo" className="navbar-logo" />

       
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Menu items - show only if isOpen is true or screen is large */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <img src={Vectorimage} alt="vector image" className='vectorlogo' />
            <a href="#">Meowoof Alert</a>
          </li>
          <li>
            <img src={postanadimg} alt="postanad logo" className="postanad-icon" />
            <a href="#">Post an Ad</a>
          </li>
          <li><a href="#">Registeration</a></li>
          <li><button className="login">Login</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



