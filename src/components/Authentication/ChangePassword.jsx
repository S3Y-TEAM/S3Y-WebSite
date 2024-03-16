import React, { useState } from 'react';
import { FaLock, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsSubmitting(true);
    // send password change request to the server
  };

  const handleNext = (event) => {
    event.preventDefault();
     // Validation
     if (password.trim() === '') {
      alert('Please enter new password.');
      return;
    }
    if (confirmPassword.trim() === '') {
      alert('Please enter confirmPassword.');
      return;
    }
    // If all validations pass
    navigate("/LoginSuccess");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/ForgetPassword");
  };

  return (
    <section>
      <div className='experiance'>
      <img src={require("../images/Reset password.png")}/>
      <h4>Reset Password</h4>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <h5>Create your new password</h5>
        <FaLock className="jobicon"/>
        <input
         type="password"
         className="form-control"
         value={password} 
         onChange={handlePasswordChange}
         required
         />
       <h5> Confirm new password</h5>
       <FaCheck className="jobicon"/>
        <input 
        type="password" 
        className="form-control"
        value={confirmPassword} 
        onChange={handleConfirmPasswordChange} 
        required
        />
      {error && <p style={{ color: 'red' }}>{error}</p>}


      <div className="backnxtbtnsSkip" style={{ marginTop:  error ? '55px' : '80px'}}>
        <button className="backbtn"  disabled={isSubmitting} onClick={handleBack}>
         Back
        </button>
        <button type="submit" className="nextbtn"  disabled={isSubmitting} onClick={handleNext}>
        Reset
        </button>
        </div>
      </div>
    </form>
    </div>
    </section>
  );
}

export default ChangePassword;