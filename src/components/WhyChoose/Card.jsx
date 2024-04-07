import React from 'react'
import './WhyChoose.css'
import choose1 from '../../assets/choose1.png'
export const Card = ({cardData}) => {
console.log(cardData);
  return (
    <div className='card-div shadow-sm'>
        <img src={choose1} alt="Choosing images" className='card-image' />
        <h4 className='p-2 fw-bold text-center'>{cardData.speciality}</h4>
        <p className='p-2 text-center'>{cardData.Description}</p>
    </div>
  )
}
