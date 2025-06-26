import React from 'react';
import './Footer.css';
import meowooflogo from '../../assets/meowooflogo-removebg.png'
import googlelogo from '../../assets/imagegoogle.png';
import appstorelogo from '../../assets/imageappstore.png';
// import loginlogo from '../../assets/alllogos-removebg.png';
import locationlogo from '../../assets/locationlogo.png';
import footerbackground from'../../assets/footerbackground.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-section">
        <div className="newsletter">
          <div className='search-content'>
            <h4>Sign up for offers</h4>
            <p>Sign up for our newsletter to receive exclusive offers & discounts!</p>
          </div> 
            <div className="for-btn">
             <hr />

              <input type="text" placeholder='Your Email Address' />
              <button>Subscribe</button>
            </div>
          </div>
      </div>
      <div className="footer-top-curve"></div>
      <div className="footer-container">
        <div className="footer-brand">
     
          <div className="brand-logo">
           
            <img src={meowooflogo} alt="meowoof logo" />
          </div>
          <p>If you have any question, please contact us at</p>
          <a href="mailto:support@example.com" className="support-link">support@example.com</a>
          
          <p className="location">
 <i class="fa-solid fa-location-dot"></i>
 <a href="#">Meowoo.Ltd.Ireland</a>
</p>


          <button className="login-button">Login</button>
          <div className="logoos">
            <i class="fa-brands fa-x-twitter"></i> 
            <i class="fa-brands fa-instagram"></i>                
           {/* <img src={loginlogo} alt="Login logo" /> */}
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-linkedin"></i>
           <i class="fa-brands fa-pinterest"></i>
           </div>
        </div>

    
        <div className="footer-links">
          <div>
            <h4>Support</h4>
            <ul>
              <li>How it works</li>
              <li>Posting Rules</li>
              <li>Buying Advice</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Cats, Dogs</li>
              <li>Pet Services</li>
              <li>Veterinary Services</li>
              <li>Shelters</li>
              <li>Pet Adoption</li>
              <li>Articles</li>
            </ul>
          </div>
        </div>

       
        <div className="footer-right">
          
          <div className="download-app">
  <p>Download our App</p>
  <img src={googlelogo} alt="Google Play" />
  <img src={appstorelogo} alt="App Store" />
</div>

        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Copyright by <span>AlrightTech</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;