import React, { useState } from "react";
import './Signup.css';
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './utils/firebase';

function Signup() {
  const [contact, setcontact] = useState(
    {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { displayName, email, password, confirmPassword } = contact;

  async function handleClick(event) {
    // Check if any required field is empty
    if (!displayName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('The Passwords you have entered do not match.');
      return;
    }

    try {
      // Attempt to create a new user
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      setSuccessMessage('Account created successfully.');
      window.location.href = '/login';
    }

    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already exists. Please use a different email address.');
      }

      else {
        setError('Error creating an account.');
      }
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  return (
    <div>

      <div className="header5">

        {error && <div className="error">{error}</div>}
        {successMessage && <div>{successMessage}</div>}

        <t className="heading2">Create a Dev@Deakin Account</t>
        <br></br>
        <br></br>

        <t className="text7">Name*</t>
        <input className="signup" name='displayName' type='text' onChange={handlepass} />
        <br></br>

        <t>Email*</t>
        <input className="signup2" name='email' type='email' onChange={handlepass} />
        <br></br>

        <t>Password*</t>
        <input className="signup3" name='password' type='password' onChange={handlepass} />
        <br></br>

        <t>Confirm password*</t>
        <input className="signup4" name='confirmPassword' type='password' onChange={handlepass} />
        <br></br>

        <button onClick={handleClick} className="button3">Create</button>
        <br></br>
        <br></br>

      </div>
    </div>
  )
}

export default Signup;
