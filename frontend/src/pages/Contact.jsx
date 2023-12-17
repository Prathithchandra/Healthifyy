import React, { useState } from "react";
import { BASE_URL } from "../config";
import { toast } from 'react-toastify'; // Import toast from react-toastify

const Contact = () => {
  const initialFormData = {
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Form submitted successfully'); // Display success toast
        setFormData(initialFormData); // Reset form fields
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to know about a Beta feature? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder=" example@gmail.com"
              className="form__input mt-1"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              value={formData.subject}
              onChange={handleInputChange}
              name="subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment..."
              className="form__input mt-1"
              value={formData.message}
              onChange={handleInputChange}
              name="message"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
