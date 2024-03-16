import React, { useState ,useRef } from "react";
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const NationalData= () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  localStorage.setItem("Personal_image",image2);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleIconClick2 = () => {
    fileInputRef2.current.click();
  };

  const handleImageChange1 = (e) => {
    const selectedImage1 = e.target.files[0];
    if (selectedImage1) {
      setImage1(URL.createObjectURL(selectedImage1));
    }
  };

  const handleImageChange2 = (e) => {
    const selectedImage2 = e.target.files[0];
    if (selectedImage2) {
      setImage2(URL.createObjectURL(selectedImage2));
    }
  };

  const handleNext = (event) => {
    event.preventDefault();

     // Validation
    if (image1 === null) {
        alert('Please upload your national image.');
        return;
    }
    if (image2 === null) {
        alert('Please upload your personal image.');
        return;
    }
    // If all validations pass
    navigate("/UploadEmail");
  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/Links");
  };


 

  return (
    <section>
    <div className="experiance">
            <img src={require("../images/Image upload.png")}/>
            <h4>National Data</h4>     
        <form >
        <div className="form-group">
            <h5>Upload your National Image</h5>
            <div style={{display:'flex',flexDirection:'row'}}>
        <div className="uploadproject">
        <label>Upload Image </label>
        <FaUpload  onClick={handleIconClick} style={{ cursor: 'pointer',color:'#164863' }} />
        <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange1}
         accept="image/*"
        />
        </div>
        {image1 && (
        <img src={image1} alt="Uploaded" style={{ width:'50px',height:'50px',margin:'5px 0 0 5px' }} />
      )}
      </div>

            <h5>Upload your Personal Image</h5>
            <div style={{display:'flex',flexDirection:'row'}}>
        <div className="uploadproject" >
        <label>Upload Image </label>
        <FaUpload  onClick={handleIconClick2} style={{ cursor: 'pointer',color:'#164863' }} />
        <input
        type="file"
        ref={fileInputRef2}
        style={{ display: 'none' }}
        onChange={handleImageChange2}
         accept="image/*"
        />
        </div>
        {image2 && (
        <img src={image2} alt="Uploaded" style={{ width:'50px',height:'50px', margin:'5px 0 0 5px' }} />
      )}
      </div>

    



        <div className="backnxtbtnsSkip"  style={{ marginTop: '80px'}}>
        <button className="backbtn" onClick={handleBack}>
         Back
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

export default NationalData;