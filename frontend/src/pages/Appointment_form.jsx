import React, { useState } from 'react';
import { BASE_URL } from '../config';

const AppointmentForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    date: '',
    reason: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/appform`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData(initialFormData); // Reset form fields
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Doctor Appointment Form</h2>
      {formSubmitted ? (
        <div className="alert alert-success" role="alert">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Appointment Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason for Appointment:</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
