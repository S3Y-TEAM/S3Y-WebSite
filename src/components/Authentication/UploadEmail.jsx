import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import'./UploadEmail.css'
import { useNavigate, useLocation } from 'react-router-dom';



const UploadEmail= () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(['', '', '', '', '']);
    const codeInputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [isSendClicked, setIsSendClicked] = useState(false);
    const [isCodeMatched, setCodeMatched] = useState(false);
    const [isResendClicked, setIsResendClicked] = useState(false);
    const [response, setResponse] = useState(null); 
    // const location = useLocation();
    // const userName = location.state ? location.state.userName : "";
    const userName = localStorage.getItem("userName");
    const newToken = localStorage.getItem("jwtToken");
    const role = localStorage.getItem("role");
    localStorage.setItem("email",email);


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


      // Make the API call here
     fetch("https://s3y.onrender.com/api/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Role": role,
        "Authorization": `Bearer ${newToken}`,
      },
      body: JSON.stringify({ userName, email }),
    })
      .then((response) => {
        if (!response.ok) {
          alert("this email already exist");

          return response.json().then((response) => {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.message}`);
          });
        }

         // Extract token again
         const authorizationHeaderr = response.headers.get("authorization");
         const newToken2 = authorizationHeaderr ? authorizationHeaderr.split(" ")[1] : null;
         console.log("NewToken2:", newToken2);
         localStorage.setItem("jwtToken",newToken2);

       

        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setResponse(data);
        if (data && data.codeNumber) {
          const sentCode = data.codeNumber;
          console.log("Sent Code:", sentCode);
         
      } 
      setIsSendClicked(true);
      setShowCodeInput(true);

       
      })
      .catch((error) => {
        console.error("Error making API request:", error);
       
        
      });
   

    // setIsSendClicked(true);
    // setShowCodeInput(true);


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
    localStorage.setItem("enteredcode",enteredCode)
    const sentCode = response && response.data && response.data.codeNumber;
    localStorage .setItem("sentcode",sentCode)
    if (enteredCode && sentCode && enteredCode.trim() === sentCode.trim()) {
    setCodeMatched(true);
    setTimeout(() => {
      setCodeMatched(false);
      navigate("/UploadPhone");
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
    navigate("/NationalData");
  };


  return (
    <section>
     <div className="experiance">
             <img src={require("../images/Image upload.png")}/>
             <h4>Upload your Email Address</h4>     
        <div className="form-group">
        <FaEnvelope className="jobicon" />
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
           {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
         {isSendClicked ?  <img src={require("../images/Animation - 1709759818235.gif")} style={{width:"20px",height:"20px" ,marginTop:'2px'}}/>:<button onClick={handleSendCode} className="sendbtn">Send Code </button>}
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
              <button onClick={handleConfirm} className={`confirmbtn ${isCodeMatched ? 'confirming' : ''}`} >
               {isCodeMatched ? 'Confirming...' : 'Confirm'}
              </button>
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

export default UploadEmail;





