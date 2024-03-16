import React from "react";
import'./LoginSuccess.css';
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../Animation - 1710012578540.json";


const SignupSuccess = () => {
  // const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true); 

  const role =localStorage.getItem("role");
  const newToken3=localStorage.getItem("jwtToken")
  const fullName = localStorage.getItem('fullName');
    const names = fullName.split(' ');
    const FName = names[0] || ''; 
    const LName = names.slice(1).join(' '); 
    localStorage.setItem('firstName', FName);
    localStorage.setItem('lastName', LName);
  const user_name = localStorage.getItem("userName");
  const Password = localStorage.getItem("Password");
  const Email = localStorage.getItem("email");
  const Phone_number = localStorage.getItem("Phone_number");
  const LinkedinLink = localStorage.getItem('linkedinLink');
  const GithubLink = localStorage.getItem('githubLink');
  const Links = [
    {
      "Linkedin": LinkedinLink,
      "Github": GithubLink
    }
  ]; 
  const certficates =localStorage.getItem("certficates");
  const categories = localStorage.getItem("selectedCategories");
  const Personal_image = localStorage.getItem("Personal_image");
  const National_id ="123456789511"
  localStorage.setItem("National_id", National_id) 
  const country="Eygpt";
  localStorage.setItem("country",country);
  const city="cairo";
  localStorage.setItem("city",city);
  const Address="cairo,6october";
  localStorage.setItem("Address",Address);


// store all data local storage
  const addToFullStore = (data) => {
    const FullStoreData = JSON.parse(localStorage.getItem("FullStore")) || [];
    FullStoreData.push(data);
    localStorage.setItem("FullStore", JSON.stringify(FullStoreData));
  };
  addToFullStore({
    National_id, FName, LName, Email, Password, Phone_number,
    Personal_image, country, city, Address, user_name, Links, categories, certficates
  });
 //******************* //
  useEffect(() => {
    fetch("https://s3y.onrender.com/api/v1/phone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Role": role,
        "Authorization": `Bearer ${newToken3}`,
      },
      body: JSON.stringify({National_id, FName ,LName ,Email, Password,  Phone_number,Personal_image,country,city,Address,user_name, Links,categories , certficates}),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((response) => {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.message}`);
          });
        }
        // setSuccess(true);
        // setLoading(false);

        setTimeout(() => {
          setLoading(false);
        }, 3000); 
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
       
      })
      
      .catch((error) => {
        console.error("Error making API request:", error);
        setTimeout(() => {
          setLoading(false);
        }, 3000); 
      });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  
  return (
    <div>
    {loading ? (
      <div style={{marginTop:"180px",color:"#164863"}}>
      <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    ) :(
    <section>
    < div className="loginsuccess">
      <img className="completed" src={require("../images/Group 137.png")}/>
      <h2>Sucessfully signed-Up</h2>
      <p>Your account will be activated within 24 hours</p>
      <button className="Letsstartbtn">Let's Start <img src={require("../images/Right Arrow.png")}/></button>
    </div>
    </section>
     )}
 </div>
);
};

export default SignupSuccess;