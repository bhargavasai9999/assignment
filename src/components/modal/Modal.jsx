import React from 'react';
import { IoMdClose } from "react-icons/io";
import tick from './tick.gif';
import './Modal.css'; // Ensure you have this CSS file for styling

export const Modal = ({ close }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <IoMdClose onClick={close} size={40} color={'red'}/>
        <div>
          <img src={tick} alt='Animated Tick'/>
          <p>Thank you for your Interest!</p>
          <h4>We will reach you shortly...</h4>
        </div>
      </div>
    </div>
  );
};

