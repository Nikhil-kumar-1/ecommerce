import React, { useRef } from "react";
import "./Otp.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Constants from "../../Constants/Constants";
import { useLocation,useNavigate} from "react-router-dom";
const OTP = () => {
  const API_URL = Constants.API_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state ? location.state.email : null;
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


  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const digitValidate = (index, event) => {
    let value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, "");
    if (value === "") return;

    if (index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && event.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const verifyOTPHandler = () => {
    let otp = "";
    inputRefs.forEach((input) => {
      otp += input.current.value;
    });
    console.log(otp);
    if(otp.length !== 6 || isNaN(otp)){
      toast.error('Please enter a valid OTP', toastOptions);
      return;
    }
    const data = {
      email: email,
      otp: otp,

    }
    axios.post(API_URL + 'api/v1/users/verify-otp', data)
      .then((response) => {
         if(response.data.status === 'success'){
           toast.success(response.data.message, toastOptions);
            navigate('/')
          } else {
            toast.error(response.data.message, toastOptions);
            navigate('/login')
          }
      })
      .catch((error) => {
         toast.error('Something went wrong', toastOptions);
         navigate('/login')
      })
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4 text-center">
          <div className="row">
            <div className="col-sm-12 mt-5 bgWhite">
              <div className="title">Verify OTP</div>

              <form action="" className="mt-5">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    className="otp"
                    type="text"
                    ref={inputRefs[index]}
                    onInput={(event) => digitValidate(index, event)}
                    onKeyDown={(event) => handleBackspace(index, event)}
                    maxLength="1"
                  />
                ))}
              </form>
              <hr className="mt-4" />
              <button onClick={() => verifyOTPHandler()} className="btn btn-primary btn-block mt-4 mb-4 customBtn">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OTP;
