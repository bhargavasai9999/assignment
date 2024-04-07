// StartJourney.js
import React, { useState } from 'react';
import './StartJourney.css';
import { FormComponent } from '../Forms/FormComponent';
import { Modal } from '../modal/Modal';

export const StartJourney = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalView = () => {
    setOpenModal(true);
  };

  const closeModalView = () => {
    setOpenModal(false);
  };

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    openModalView();
  };

  return (
    <div className='container start-journey-div my-4 p-2 shadow-sm d-flex flex-row'>

      <div className='text-left m-2 p-2'>
        <h3>Kick Off your ACCA Journey with IndigoLearn</h3>
        <p>Sign-In and get instant access to our FREE courses</p>
        <button className='start-journey-button my-3'>Start Journey</button>
      </div>

      <div className='start-journey-form-div m-3'>
        <FormComponent submit={handleSubmit} />
      </div>

      {openModal && <Modal close={closeModalView} />}
    </div>
  );
};
