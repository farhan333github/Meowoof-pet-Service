import React from 'react';
import './Avail.css'; 
import iconBgimage from '../../assets/iconBg.png'; 
import { FaHome, FaDog, FaSearch } from 'react-icons/fa'; // FaDog can be used for Trainer



const servicesData = [
  {
    title: 'Boarding',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
     icon: <FaSearch />, 
    iconBg: 'teal',
  },
  {
    title: 'Trainer',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: <FaDog />,
    iconBg: 'maroon',
  },
  {
    title: 'Grooming',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    icon: <FaHome />, 
    iconBg: 'tomato',
  },
];


const Avail = () => {
  return (
    <div className="services-section">
      <h2 className="section-title"> Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper" style={{ backgroundColor: service.iconBg }}>
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avail;

