import React, { useState ,useRef } from "react";
import'./Experiance.css'
import'./Uploadproject.css'
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Uploadproject= () => {
    const navigate = useNavigate();
  const [projectname, setprojectname] = useState("");
  const [description, setdescription] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);


  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
     if (projectname.trim() === '') {
      alert('Please enter project Name.');
      return;
    }
    if (selectedOption === '') {
      alert('Please choose project Type.');
      return;
    }
    if (description.trim() === '') {
        alert('Please enter project description.');
        return;
    }
    if (file === null) {
        alert('Please upload a project file.');
        return;
    }
    // If all validations pass
    navigate("/UploadCertificate");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/Experiance");
  };

  const handleSkip =(event)=>{
    event.preventDefault();
    navigate("/UploadCertificate");
  }


 

  return (
    <section>
    <div className="experiance">
            <img src={require("../images/project.png")}/>
            <h4>Upload Project</h4>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="projectname"
            placeholder="Enter Project Name "
            value={projectname}
            onChange={(event) => setprojectname(event.target.value)}
            required
          />

    <div className="ptype">
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="">Select Project Type</option>
        <option value="option1">web site</option>
        <option value="option2">Application</option>
        <option value="option3">android</option>
        <option value="option3">flutter</option>
        <option value="option3">react</option>
      </select>
    </div>

    <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Project Description"
            value={description}
            onChange={(event) => setdescription(event.target.value)}
            required
          />
    </div>

      <div className="uploadproject">
    <label>Upload project file</label>
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
   



        <div className="backnxtbtnsSkip">
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

export default Uploadproject;