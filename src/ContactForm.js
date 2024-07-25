import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

// yaha pe states declare krra huu
const ContactForm = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: email,
      message: message,
    };

    emailjs.send('service_kt92gjm', 'template_auaz19i', templateParams, 'QpID8KyhNjVCxW77P')
      .then((response) => {
        console.log('Email sent successfully:', response);
        onClose();
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return isVisible ? (
    <div className="contact-popup">
      <div className="contact-popup-content">
        <span className="contact-popup-close" onClick={onClose}>&times;</span>
        <h2>Let's get in touch</h2>
        <p style={{color : "green", fontFamily : "serif"}}>I'm always excited to hear from you! Whether you have a question, a project idea, or just want to chat, feel free to reach out. I'm here to help and would love to connect with you.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className='form-label'>Your Email </label>
            <input
              type="email"
              id="email"
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className='form-label'>Your Message</label>
            <textarea
              id="message"
              className='form-control'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <center>
          <button type="submit" className='btn btn-dark my-3'>Send</button>
          </center>
        </form>
      </div>
    </div>
  ) : null;
};

export default ContactForm;
