import React from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Ensure you have modal styles

Modal.setAppElement('#root'); // For accessibility reasons

const CustomModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Details"
      className="Modal"
      overlayClassName="Overlay"
    >
      <button onClick={onRequestClose} className="CloseButton">X</button>
      <div className="ModalContent">
        {content}
      </div>
    </Modal>
  );
};

export default CustomModal;