import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ConnectForm.css';

const ConnectForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    user_email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hyg6szh',
      'template_bhj8bfq',
      formData,
      'D-VE3ImMNzfXOXRL5'
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
    })
    .catch((error) => {
      console.log(error.text);
    });
  };

  // Handle ESC key to close popup
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closePopup]);

  return (
    <div className="connect-form-wrapper" onClick={closePopup}>
      <div className="connect-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>×</button>

        {!submitted ? (
          <>
            <h2 className="connect-title">Connect With Us</h2>
            <form onSubmit={sendEmail} className="connect-form">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you! We'll connect with you soon.</h2>
            <button className="submit-button" onClick={closePopup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectForm;
