import React, { useState } from "react";
import'./Experiance.css'
import'./Uploadproject.css'
import {  FaLinkedin,FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Links= () => {
  const navigate = useNavigate();
  const [linkedin, setlinkedin] = useState(null);
  const [GitHub, setGitHub] = useState(null);
  localStorage.setItem("Linkedin",linkedin);
  localStorage.setItem("Github",GitHub);


  const handleNext = (event) => {
    event.preventDefault();

     // Validation
     if (linkedin.trim() === '') {
      alert('Please enter your linkedin.');
      return;
    }
    if (GitHub.trim === '') {
      alert('Please enter your GitHub.');
      return;
    }
    // If all validations pass
    navigate("/NationalData");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/UploadCertificate");
  };

  const handleSkip =(event)=>{
    event.preventDefault();
    navigate("/NationalData");
  }


 

  return (
    <section>
    <div className="experiance">
            <img src={require("../images/Connected.png")}/>
            <h4>Links</h4>

     
      <form>
        <div className="form-group">
        <h5>Upload Linked In</h5>
        <FaLinkedin className="jobicon"/>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            placeholder="Enter your Linked In "
            value={linkedin}
            onChange={(event) => setlinkedin(event.target.value)}
            required
          />

        <h5>Upload GitHub</h5>
        <FaGithub className="jobicon"/>
          <input
            type="text"
            className="form-control"
            id="GitHub"
            placeholder="Enter your GitHub "
            value={GitHub}
            onChange={(event) => setGitHub(event.target.value)}
            required
          />



        <div className="backnxtbtnsSkip" style={{marginTop:'82px'}}>
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
      </form>
    </div>
    </section>
  );
};

export default Links;