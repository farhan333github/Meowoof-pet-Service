import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="location">
        <FontAwesomeIcon icon={faLocationDot} className="icon" />
        <span>All Ireland</span>
        <span className="arrow">▼</span>
      </div>
      <input type="text" placeholder="Search Meowoof" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;

