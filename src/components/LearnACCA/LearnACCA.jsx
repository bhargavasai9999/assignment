import React from 'react';
import './LearnACCA.css'
export const LearnACCA = () => {
  const LearnData = [{
    title: 'Basic level',

    skilldetails: ['Data structures', 'MERN stack', 'Basic Programming'],
    description: '3 papers'
  },{
    title: 'Skills level',
    skilldetails: ['Algorithms', 'react js', 'POstgreSQL', 'Database Management', 'Operating System'],
    description: '5 papers'
  },{
    title: 'Professional level',
    skilldetails: ['Advanced Data structures', 'AI and ML', 'Docker', 'Git and Github', 'Containerization'],
    description: '4 papers'
  }];

  return (
    <div>
      <h2 className='text-center m-2 p-3'>What you will learn in ACCA ?</h2>
      <div className='d-flex flex-row mt-3 justify-content-center '>
        {LearnData.map((data, index) => (
          <div key={index} className='m-3 learn-div d-flex flex-column justify-content-between shadow-sm'>
            <h5 className='text-center learn-heading m-0'>{data.title}</h5>
            <ul>
              {data?.skilldetails.map((skill, index) => (
                <li key={index} className='fw-bold m-1'>{skill}</li>
              ))}
            </ul>
            <h5 className='text-center learn-heading m-0'>{data.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

