import React, { useState ,useRef } from "react";
import'./Experiance.css'
import'./Uploadproject.css'
import'./UploadCertificate.css'
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const UploadCertificate= () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  localStorage.setItem("certficates",file);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('File uploaded:',e.target.files[0]) ;
  };
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleNext = (event) => {
    event.preventDefault();

     // Validation
    if (file === null) {
        alert('Please upload a Certificate file.');
        return;
    }
    // If all validations pass
    navigate("/Links");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/uploadproject");
  };

  const handleSkip =(event)=>{
    event.preventDefault();
    navigate("/Links");
  }


  return (
    <section>
    <div className="experiance">
            <img src={require("../images/Certification.png")}/>
            <h4>Upload Certificates</h4>   

      <form>
        <div className="form-group">
      <div className="uploadcer">
    <label>Upload File</label>
    <FaUpload  onClick={handleIconClick} style={{ cursor: 'pointer',color:'#164863' }} />
    <input
       type="file"
       ref={fileInputRef}
       style={{ display: 'none' }}
       onChange={handleFileChange}
    />
      </div>
      {file !== null && (
              <p>Selected File: {file.name}</p>
      )}
   

        <div className="backnxtbtnsSkipC">
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

export default  UploadCertificate;