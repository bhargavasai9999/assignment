import React, { useState } from 'react';
import './Intro.css';
import { FormComponent } from '../Forms/FormComponent';
import { Modal } from '../modal/Modal';

export const Intro = () => {
  const StageData = [
    {
      title: 'Levels',
      description: 'more than 3 levels'
    },
    {
      title: 'Duration',
      description: '6-12 weeks'
    },
    {
      title: 'Exams',
      description: 'Quarterly(3 months)'
    },
    {
      title: 'Exemptions',
      description: 'Upto 2 Papers'
    }
  ];

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
    <div className='start-journey-div mb-4 p-2 shadow-sm d-flex flex-row'>
      {!openModal && (
        <div className='text-left m-2 p-2 col-md-8'>
          <h3>Become ACCA in 18 Months</h3>
          <p>
            World class computer science Engineers are grown here.. ACCA is a
            well structured and industry standard curriculum which enhances
            your knowledge on latest technologies.
          </p>
          <button className='start-journey-button my-3 bg-info mx-3'>
            Download Brochure
          </button>
          <button className='start-journey-button my-3'>Start Journey</button>
          <div>
            <div className='d-flex flex-row justify-content-start mt-2'>
              {StageData.map((data, index) => (
                <div
                  key={index}
                  className='d-flex flex-column m-2 justify-content-start  bg-white border-2 shadow-sm py-1 px-4 durationCard-intro '
                >
                  <h6 className='text-center'>{data.title}</h6>
                  <p className='text-center '>&nbsp;{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className='start-journey-form-div m-3'>
        <FormComponent submit={handleSubmit} />
      </div>
      {openModal && <Modal close={closeModalView} />}
    </div>
  );
};
