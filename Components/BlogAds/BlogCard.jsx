import React from 'react';
import './BlogCard.css';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src="/src/assets/Blogimage (1).png" alt="Blog" className="blog-image" />
        <div className="date-badge">20 Aug</div>
      </div>
      <div className="content">
        <span className="tag">Travel</span>
        <h3 className="title">River rear main branch at the sirt area</h3>
        <div className="meta">
          <span className="author">By <strong>Williamson</strong></span>
          <span className="comments">· 💬 0</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
