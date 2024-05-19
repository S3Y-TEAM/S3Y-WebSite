import React from "react";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import LandingPage from "./components/Authentication/Landingpage.jsx";
import Login from "./components/Authentication/Login.jsx";
import SignUp from "./components/Authentication/SignUp.jsx";
import LoginSuccess from "./components/Authentication/LoginSuccess.jsx";
import SignupSuccess from "./components/Authentication/SignupSuccess.jsx";
import Experiance from "./components/Authentication/Experiance.jsx";
import Uploadproject from "./components/Authentication/Uploadproject.jsx";
import UploadCertificate from "./components/Authentication/UploadCertificates.jsx";
import Links from "./components/Authentication/Links.jsx";
import NationalData from "./components/Authentication/NationalData.jsx";
import UploadEmail from "./components/Authentication/UploadEmail.jsx";
import UploadPhone from "./components/Authentication/UploadPhone.jsx";
import ForgetPassword from "./components/Authentication/ForgetPassword.jsx";
import ChangePassword from "./components/Authentication/ChangePassword.jsx";

import Home from "./components/DeveloperDashboard/Home.jsx";
import Dashboard from "./components/DeveloperDashboard/Home.jsx";
import Aboutus from "./components/DeveloperDashboard/Aboutus.jsx";
import Rateus from "./components/DeveloperDashboard/Rateus.jsx";
import Contactus from "./components/DeveloperDashboard/Contactus.jsx";
import Setting from "./components/DeveloperDashboard/Setting.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LoginSuccess" element={<LoginSuccess />} />
        <Route path="/SignupSuccess" element={<SignupSuccess />} />
        <Route path="/Experiance" element={<Experiance />} />
        <Route path="/Uploadproject" element={<Uploadproject />} />
        <Route path="/UploadCertificate" element={<UploadCertificate />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/NationalData" element={<NationalData />} />
        <Route path="/UploadEmail" element={<UploadEmail />} />
        <Route path="/UploadPhone" element={<UploadPhone />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />

        <Route path="/Home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
