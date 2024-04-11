import React, { useState } from 'react';
import './Login.css';
import Constants from '../../Constants/Constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const SignInPage = () => {
  const navigate = useNavigate();
  const [verificationSent, setVerificationSent] = useState(false);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  };

  const API_URL = Constants.API_URL;
  const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  const registerUserHandler = () => {
    //select by name and get value
    const username = document.querySelector('input[name="registerName"]').value;
    const email = document.querySelector('input[name="registerEmail"]').value;
    const password = document.querySelector('input[name="registerPassword"]').value;
    const confirmPassword = document.querySelector('input[name="registerConfirmPassword"]').value;
    const phoneNumber = document.querySelector('input[name="registerPhoneNumber"]').value;
    const dob = document.querySelector('input[name="registerDOB"]').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '' || dob === ''){
      toast.error('Please fill all the fields', toastOptions);
      return;
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match', toastOptions);
      return;
    } else if (password.length < 8) {
      toast.error('Password should be atleast 8 characters long', toastOptions);
      return;
    } else if (phoneNumber.length !== 10) {
      toast.error('Phone number should be 10 digits long', toastOptions);
      return;
    } else if (dob === '') {
      toast.error('Please enter your date of birth', toastOptions);
      return;
    } else if (!email.includes('@') || !email.includes('.')){
      toast.error('Please enter a valid email', toastOptions);
      return;
    }

    const data = {
      username: username,
      email: email,
      password: password,

      phoneNumber: phoneNumber,
      dateofbirth: dob
    };

    axios.post(`${API_URL}api/v1/users/register`, data).then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        // setVerificationSent(true); // Set verification sent state to true
        toast.success(response.data.message, toastOptions);
      } else {
        toast.error(response.data.message, toastOptions);
      }
    }).catch((error) => {
      console.log(error);
      toast.error('Error Registering User ', toastOptions);
    });
  };

  const loginUserHandler = () => {
    console.log('User Logged In');
    const email = document.querySelector('input[name="loginName"]').value;
    const password = document.querySelector('input[name="loginPassword"]').value;
    if(email === '' || password === ''){
      toast.error('Please fill all the fields', toastOptions);
      return;
    }
    const data = {
      email: email,
      password: password
    };
    axios.post(`${API_URL}api/v1/users/login`, data).then((response) => {
      console.log(response);
      if (response.data.status === 'success') {
        toast.success(response.data.message, toastOptions);
        navigate('/otp',{state: {email : email}});
      } else {
        toast.error(response.data.message, toastOptions);
      }
    }).catch((error) => {
      console.log(error);
      toast.error('Error Logging in User', toastOptions);
    });
  }

  const googleLoginUserHandler = () => {
    console.log('User Logged In with Google');
  }

  const googleRegisterUserHandler = () => {
    console.log('User Registered with Google');
  }

  return (
    <section>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx"><img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" alt="" /></div>
          <div className="formBx">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <h2>Sign In</h2>
              <input type="email" name="loginName" placeholder="Email Address" />
              <input type="password" name="loginPassword" placeholder="Password" />
              <input onClick={() => loginUserHandler()} type="submit" name="" value="Login" />
              <div>
                <button onClick={() => googleLoginUserHandler()}>Sign In with Google</button>
              </div>
              <p className="signup">
                Don't have an account ?
                <a href="#" onClick={toggleForm}>Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <h2>Create an account</h2>
              <input type="text" name="registerName" placeholder="Username" />
              <input type="email" name="registerEmail" placeholder="Email Address" />
              <input type="password" name="registerPassword" placeholder="Create Password" />
              <input type="password" name="registerConfirmPassword" placeholder="Confirm Password" />
              <input type="tel" name="registerPhoneNumber" placeholder='Phone Number' />
              <input type="date" name="registerDOB" placeholder='Date of Birth' />
              <input onClick={() => registerUserHandler()} type="submit" name="" value="Sign Up" />
              <div>
                <button onClick={() => googleRegisterUserHandler()}>Sign Up with Google</button>
              </div>
              {verificationSent && <p>A verification link has been sent to your email.</p>}
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={toggleForm}>Sign in.</a>
              </p>
            </form>
          </div>
          <div className="imgBx"><img src="https://c0.wallpaperflare.com/preview/189/169/306/background-berries-blueberries-bowl.jpg" /></div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignInPage;
