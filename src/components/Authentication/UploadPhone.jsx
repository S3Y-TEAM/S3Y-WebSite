import React, { useState, useRef } from "react";
import { FaPhone } from "react-icons/fa";
import'./UploadEmail.css'
import { useNavigate } from 'react-router-dom';


const UploadPhone = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState(['', '', '', '', '']);
    const codeInputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [isSendClicked, setIsSendClicked] = useState(false);
    const [isCodeMatched, setCodeMatched] = useState(false);
    const [isResendClicked, setIsResendClicked] = useState(false);
    const [response, setResponse] = useState(null);
    const role= localStorage.getItem("role");
    const newToken2 = localStorage.getItem("jwtToken");
    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("email")
    localStorage.setItem("Phone_number",phone);


    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setPhoneError('');
    };

    const isPhoneValid = () => {
        return true; 
    };

    const handleSendCode = () => {
        if (phone.trim() === '') {
            setPhoneError('Please enter your phone number.');
            return;
        }

        if (!isPhoneValid()) {
            setPhoneError('Invalid phone number. Please enter a valid phone number.');
            return;
        }

        fetch("https://s3y.onrender.com/api/v1/phone", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Role": role,
              "Authorization": `Bearer ${newToken2}`,
            },
            body: JSON.stringify({ userName, email ,phone }),
          })
            .then((response) => {
              if (!response.ok) {
                alert("this email already exist");
                return response.json().then((response) => {
                  throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.message}`);
                });
              }
             alert("Hint:enter this code:12345");

            // Extract token again
            const authorizationHeaderrr = response.headers.get("authorization");
            const newToken3 = authorizationHeaderrr ? authorizationHeaderrr.split(" ")[1] : null;
            console.log("NewToken3:", newToken3);
            localStorage.setItem("jwtToken",newToken3);


              return response.json();
            })
            .then((data) => {
              console.log("API Response:", data);
              setIsSendClicked(true);
              setShowCodeInput(true);
            })
            .catch((error) => {
              console.error("Error making API request:", error);
              
            });
       
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
        setIsResendClicked(true);
        setCode(['', '', '', '', '']);
        handleSendCode();
    };

    const handleConfirm = () => {
    const enteredCode = code.join("");
    const sentCode = ("12345");
    localStorage.setItem("enteredcodeph",enteredCode);
    localStorage.setItem("sentcodeph",sentCode)

    if (enteredCode && sentCode && enteredCode.trim() === sentCode.trim()) {
    setCodeMatched(true);
    setTimeout(() => {
      setCodeMatched(false);
      navigate("/SignupSuccess");
    }, 1000);
  } 
    else {
    setCodeMatched(false);
    alert('Code does not match');
  }
    };

    const handleNext = (event) => {
        event.preventDefault();
        handleConfirm();

      };
    
      const handleBack = (event) => {
        event.preventDefault();
        navigate("/UploadEmail");
      };

      const handleSkip =(event)=>{
        event.preventDefault();
        navigate("/SignupSuccess");
      }

    return (
        <section>
            <div className="experiance">
                <img src={require("../images/OTP.png")} />
                <h4>Upload your Phone Number</h4>
                <div className="form-group">
                    <FaPhone className="jobicon" />
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your Phone Number"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                    {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                    {isSendClicked ? <img src={require("../images/Animation - 1709759818235.gif")} style={{width:"20px",height:"20px" ,marginTop:'2px'}}/>: <button onClick={handleSendCode} className="sendbtn">Send Code </button>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {showCodeInput && (
                        <div className="code">
                            <h5>The Confirmation Code was Sent Via SMS</h5>
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
                            <button onClick={handleConfirm} className={`confirmbtn ${isCodeMatched ? 'confirming' : ''}`} >
                            {isCodeMatched ? 'Confirming...' : 'Confirm'}
                            </button>
                            <span onClick={handleResendCode} className="resend" >Resend Code</span>
                        </div>
                    )}
                </div>

                <div className="backnxtbtnsSkip" style={{ marginTop: phoneError ? '135px' : (showCodeInput ? '0' : '155px')}}>
                    <button className="backbtn" onClick={handleBack}>
                        Back
                    </button>
                    <button className="skipbtn" onClick={handleSkip}>
                        Skip
                    </button>
                    <button type="submit" className="nextbtn" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UploadPhone;



