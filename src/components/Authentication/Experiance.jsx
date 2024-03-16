import React, { useState,useEffect } from "react";
import'./Experiance.css'
import { FaBriefcase } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Experiance = () => {
  const navigate = useNavigate();
  const [job, setjob] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
  const userName = location.state ? location.state.userName : "";
  const token = localStorage.getItem("jwtToken");
  const role = localStorage.getItem("role");

  const makeApiRequest = () => {
   
  
    fetch("https://s3y.onrender.com/api/v1/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Role": role ,
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((response) => {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.message}`);
          });
        }
         // Extract token again
         const authorizationHeader = response.headers.get("authorization");
         const newToken = authorizationHeader ? authorizationHeader.split(" ")[1] : null;
         console.log("New Token:", newToken);
         localStorage.setItem("jwtToken",newToken);

        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); 
        setCategories(data.data);
      })
      .catch((error) => {
        console.error("Error making API request:", error);
        
      });
  };

  useEffect(() => {
    makeApiRequest();
  }, []);
 

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedCategories.includes(option);

    if (!isSelected && selectedCategories.length >= 5) {
      alert('You can select a maximum of 5 categories.');
      return;
    }

    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((selected) => selected !== option));
    } else {
      setSelectedCategories([...selectedCategories, option]);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
     // Validation
     if (job.trim() === '') {
      alert('Please enter your job.');
      return;
    }
    if (selectedOption === '') {
      alert('Please choose your experience level.');
      return;
    }
    if (selectedCategories.length === 0) {
      alert('Please select at least one skill.');
      return;
    }
    navigate("/uploadproject");
    

    localStorage.setItem("job",job);
    localStorage.setItem("selectedOption",selectedOption);
    localStorage.setItem("selectedCategories",selectedCategories);

  };

  const handleBack = (event) => {
    event.preventDefault();
    navigate("/SignUp");
  };

  return (
    <section>
    <div className="experiance">
            <img src={require("../images/experiences 1.png")}/>
     
        <div className="form-group">
        <h5>what is your job?</h5>
        <FaBriefcase className="jobicon"/>
          <input
            type="text"
            className="form-control"
            id="job"
            placeholder="Enter your job"
            value={job}
            onChange={(event) => setjob(event.target.value)}
            required
          />

          <div className="form-group">
          <h5>How many years you work it?</h5>
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option className="option1" value="">Choose your Experience Level:</option>
        <option value="option1">less than 1 year</option>
        <option value="option2">From 1 year to 3 year</option>
        <option value="option3">From 3 year to 5 year</option>
        <option value="option3">From 5 year to 8 year</option>
        <option value="option3">More than 8 year</option>
      </select>
    </div>

    <div className="skills">
      <h5>Select your top skills</h5>
      {categories && categories.length > 0 && (
      <div className="options1">
        {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleOptionClick(category.name)}
                  className="categoryButton"
                  style={{
                    backgroundColor: selectedCategories.includes(category.name) ? '#164863' : 'white',
                    color: selectedCategories.includes(category.name) ? 'white' : '#164863',
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
            )}
      </div>
      


        </div>
        <div className="backnxtbtnsEE" >
        <button className="backbtnE" onClick={handleBack}>
         Back
        </button>
        <button type="submit" className="nextbtnE"  onClick={handleNext}>
         Next
        </button>
        </div>

    </div>
    </section>
  );
};

export default Experiance;