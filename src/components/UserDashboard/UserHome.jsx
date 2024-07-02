import React from "react";
import UserSidebar from "./UserSidebar";
import Headerdata from "../DeveloperDashboard/Headerdata";
import'../DeveloperDashboard/Home.css';
import { Routes ,Route } from "react-router-dom";
import Aboutus from "../DeveloperDashboard/Aboutus";
import Rateus from "../DeveloperDashboard/Rateus";
import Contactus from "../DeveloperDashboard/Contactus";
import UserDashboard from "./UserDashboard";
import Setting from "../DeveloperDashboard/Setting";
import AddProblem from "./AddProblem";
import PublishTask from "./PublishTask";

const UserHome = () =>{
    return(
        <div className="Home-container">
        <Headerdata className="headerdata" />
        <UserSidebar className="sidebar" />
        <div className="contentt">
        <Routes>
                <Route path="/" element={<UserDashboard/>} />
                <Route path="/AddProblem" element={<AddProblem/>} />
                <Route path="/PublishTask" element={<PublishTask/>} />


                {/* <Route path="/Contactus" element={<Contactus/>} />
                <Route path="/Aboutus" element={<Aboutus/>} />
                <Route path="/Rateus" element={<Rateus/>} />
                <Route path="/Setting" element={<Setting/>} /> */}

        </Routes>
        
        </div>
      </div>
    );
};
export default UserHome;