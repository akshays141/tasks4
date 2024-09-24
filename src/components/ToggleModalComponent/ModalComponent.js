
import React from 'react';
import './modalComponent.css' 

const Modal = ({ isOpen, children }) => {
    return (
      <div className={`modal ${isOpen ? 'show' : ''}`}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;