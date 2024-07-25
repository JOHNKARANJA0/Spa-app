import React, { useState } from 'react';
import CustomModal from './Modal';
import './Services.css'; // Ensure styles are included

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent('');
  };

  return (
    <div>
      <h1>Our Services</h1>
      <div className="service-cards">
        <div 
          className="card" 
          onClick={() => openModal('Details about Service 1')}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2015/07/08/08/10/massage-835468_1280.jpg" 
            alt="Service 1" 
            className="service-image"
          />
          <h3>Service 1</h3>
        </div>
        <div 
          className="card" 
          onClick={() => openModal('Details about Service 2')}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_640.jpg" 
            alt="service 2" 
            className="service-image"
          />
          <h3>Service 2</h3>
        </div>
        <div 
          className="card" 
          onClick={() => openModal('Details about Service 3')}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2022/09/13/21/47/massage-7452918_640.jpg" 
            alt="service 3" 
            className="service-image"
          />
          <h3>Service 3</h3>
        </div>
        {/* Add more cards as needed */}
      </div>
      <CustomModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        content={modalContent} 
      />
    </div>
  );
};

export default Services;