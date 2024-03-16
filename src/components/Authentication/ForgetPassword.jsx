import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const [code, setCode] = useState(['', '', '', '', '']);
  const codeInputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isSendClicked, setIsSendClicked] = useState(false);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendCode = () => {
    if (email.trim() === '') {
        setEmailError('Please enter your email address.');
        return;
      }
  
      if (!isEmailValid()) {
        setEmailError('Invalid email address. Please enter a valid email.');
        return;
      }
      setIsSendClicked(true);
      setShowCodeInput(true)
      // send code to email
    };

    const handleCodeChange = (index, value) => {
      const newCode = [...code];
      newCode[index] = value;
      if (index < code.length - 1 && value.length > 0) {
          codeInputRefs[index + 1].current.focus();
        }
        setCode(newCode);
    };
  
    const handleResendCode = () => {
      // resend code to email
    };
  
    const handleConfirm = () => {
      // verify code and move to next step
    };

    const handleNext = (event) => {
      event.preventDefault();
  
       // Validation
     
      // If all validations pass
      navigate("/ChangePassword");
    };
  
    const handleBack = (event) => {
      event.preventDefault();
      navigate("/Login");
    };
  
  

  return (
    <section>
    <div className="experiance">
            <img src={require("../images/Forgot password.png")}/>
      <h4>Forget Password</h4>
        <div className="form-group">
        <FaEnvelope className="jobicon" />
        <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your s3y Email address"
            value={email}
            onChange={handleEmailChange}
            required
          />
           {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
           {isSendClicked ? <div>✅</div>:<button onClick={handleSendCode} className="sendbtn">Send Code </button>}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {showCodeInput && (
            <div className="code">
              <h5>The Confirmation Code was Sent Via E-mail</h5> 
              <div className="fivecode" >           
                 {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              maxLength="1"
              ref={codeInputRefs[index]}
            />
          ))}
              </div>  
              <button onClick={handleConfirm} className="confirmbtn">Confirm</button>
              <span onClick={handleResendCode}className="resend" >Resend Code</span>

            </div>
          )}
        </div>

 
         <div className="backnxtbtnsSkip" style={{ marginTop:  emailError ? '135px' : (showCodeInput ? '0' : '155px')}}>
         <button className="backbtn" onClick={handleBack}>
          Back
         </button>
         <button type="submit" className="nextbtn" onClick={handleNext}>
          Next
         </button>
         </div>
     </div>
     </section>
  );
};

export default ForgetPassword;