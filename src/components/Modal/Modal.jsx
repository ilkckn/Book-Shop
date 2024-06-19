import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <button className="closeButton" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
