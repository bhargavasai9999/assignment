import React from 'react';
import { Card } from './Card'; // assuming Card component is imported from elsewhere
import { SiLevelsdotfyi } from "react-icons/si";

export const WhyChoose = () => {
  const DescriptionData = [{
    speciality: 'Expert Faculty',
    Description: 'The Faculty at ACCA are highly experienced and worked on top FAANG Companies in the world',
    imageUrl: 'F:\\assignment\\src\\assets\\choose1.png'
  },{
    speciality: 'Complete Success Package',
    Description: 'Achieve your dreams at ACCA with personalized learning path',
    imageUrl: 'F:\\assignment\\src\\assets\\choose1.png'
  },{
    speciality: 'Placements',
    Description: 'Top companies are recruiting our students around the world',
    imageUrl: 'F:\\assignment\\src\\assets\\choose1.png'
  }];
  const StageData=[{
    title:'Levels',
    description:'more than 3 levels'
  },
  {
    title:'Duration',
    description:'6-12 weeks'
  },
  {
    title:'Exams',
    description:'Quarterly(3 months)'
  },{
    title:'Exemptions',
    description:'Upto 2 Papers'
  }]

  return (
    <div className='text-center'>
      <h2 className='border-4 '>Why Choose Us ?</h2>
      <div className='d-flex flex-row justify-content-center'>
        {DescriptionData.map((data, index) => (
          <Card key={index} cardData={data} />
        ))}
      </div>
      <div className='d-flex flex-row justify-content-center mt-2'>
        {StageData.map((data, index) => (
          <div key={index} className='d-flex flex-column m-2 justify-content-center  bg-white border-2 shadow-sm py-1 px-4 durationCard align-content-center'>
            <h4 className='text-center'>{data.title}</h4>
            <p className='text-center fw-bold'><SiLevelsdotfyi size={15}/>&nbsp;{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
