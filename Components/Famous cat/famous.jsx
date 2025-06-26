import React from 'react';
import './famous.css';

const Famous = () => {
  return (
    <div className="popularman-card">
      <div className="popularman-image-wrapper">
        <img
          src="/src/assets/famousimage (1).png"
          alt="Golden Retriever"
          className="popularman-image"
        />
        <span className="popularman-heart">♡</span>
      </div>
      <h3 className="popularman-title">Golden Retriever</h3>
    </div>
  );
};

export default Famous;
