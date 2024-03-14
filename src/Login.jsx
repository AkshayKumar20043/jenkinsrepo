import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { auth, signInWithGooglePopup, signinAuthUserWithEmailAndPassword } from './utils/firebase';

function Login() 
{
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleLogin = async () => {
    try 
    {
      await signInWithGooglePopup();
      navigate('/'); // Redirect to the homepage after Google login
    } 
    
    catch (error) 
    {
      console.error('Google login error:', error.message);
    }
  };

  const handleLogin = async () => {
    try 
    {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      if (response) 
      {
        setErrorMessage('Login successful.');
        navigate('/');
      }
      
      else
      {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
     
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  return (
    <div className="cont">
      {errorMessage && <p className="err3">{errorMessage}</p>}

      <button className="sign">
        <Link to='/signup' className="sign2">
          Sign up
        </Link>
      </button>

      <br></br>

      <label> Your email </label>
      <br></br>
      <input className="input3" name='email' type='email' onChange={handleInputChange} />

      <br></br>
      <br></br>

      <label> Your password </label>
      <br></br>
      <input className="input4" name='password' type='password' onChange={handleInputChange} />

      <br></br>

      <button onClick={handleLogin} className="button2">
        Login
      </button>

      <br></br>
    </div>
  );
}

export default Login;
