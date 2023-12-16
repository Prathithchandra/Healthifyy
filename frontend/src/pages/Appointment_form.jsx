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
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Doctor Appointment Form</h2>
      {formSubmitted ? (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md mb-4">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-semibold">
              Appointment Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="reason" className="block mb-1 font-semibold">
              Reason for Appointment:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
