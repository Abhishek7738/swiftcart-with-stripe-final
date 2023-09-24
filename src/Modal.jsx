import React from "react";
import "./home.css";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p> Item purchased successfully!</p>
        <p> Product will be delivered soon!</p>
      </div>
    </div>
  );
};

export default Modal;
