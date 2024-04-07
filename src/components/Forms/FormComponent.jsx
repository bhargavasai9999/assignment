import React, { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './Form.css';

export const FormComponent = ({ submit }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    qualification: '',
    interest: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(formData);
  };

  return (
    <div>
      <h4>Applying to be an ACCA? Get in touch with us!</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-3'>
          <InputGroup>
            <FormControl 
              className="form-input"
              type="tel" 
              name="phoneNumber"
              placeholder="Phone Number*" 
              required 
              value={formData.phoneNumber} 
              onChange={handleChange} 
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className='m-3'>
          <InputGroup>
            <FormControl 
              className="form-input"
              type="email" 
              name="email"
              placeholder="Email ID*" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className='m-3'>
          <Form.Control 
            className="form-select"
            as="select" 
            name="qualification"
            defaultValue="" 
            placeholder='Current Qualification'
            value={formData.qualification}
            onChange={handleChange}
          >
            <option disabled hidden>Current Qualification</option>
            <option>High School</option>
            <option>ITI</option>
            <option>Graduate</option>
            <option>Post-Graduate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='m-3'>
          <Form.Control 
            className="form-select"
            as="select" 
            name="interest"
            defaultValue="" 
            placeholder='Interested In'
            value={formData.interest}
            onChange={handleChange}
          >
            <option>Full Stack development</option>
            <option>Python Developer</option>
            <option>Android app development</option>
            <option>AI and ML</option>
          </Form.Control>
        </Form.Group>

        <button type="submit" className="form-button">Request Call Back</button>
      </Form>
    </div>
  );
};

