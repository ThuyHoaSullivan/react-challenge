// src/components/ContactMe/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css'; // Correct import for CSS files

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field, value) => {
    switch (field) {
      case 'name':
        setNameError(value ? '' : 'This field is required');
        break;
      case 'email':
        if (!value) {
          setEmailError('This field is required');
        } else if (!validateEmail(value)) {
          setEmailError('Your email address is invalid');
        } else {
          setEmailError('');
        }
        break;
      case 'message':
        setMessageError(value ? '' : 'This field is required');
        break;
      default:
        break;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields before submission
    handleBlur('name', name);
    handleBlur('email', email);
    handleBlur('message', message);

    // Stop submission if there are any errors
    if (nameError || emailError || messageError) {
      return;
    }

    // Handle form submission logic (e.g., send data to a server)
    console.log('Form submitted successfully!');
  };

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        className="inputField"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => handleBlur('name', name)}
        required
      />
      {nameError && <p className="errorMessage">{nameError}</p>}

      <label>Email:</label>
      <input
        type="email"
        className="inputField"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => handleBlur('email', email)}
        required
      />
      {emailError && <p className="errorMessage">{emailError}</p>}

      <label>Message:</label>
      <textarea
        className="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => handleBlur('message', message)}
        required
      />
      {messageError && <p className="errorMessage">{messageError}</p>}

      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;