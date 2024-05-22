import React from "react";
import Sidebar from "./Sidebar";
import Headerdata from "./Headerdata";
import "./Home.css";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Rateus from "./Rateus";
import Contactus from "./Contactus";
import Dashboard from "./Dashboard";
import Setting from "./Setting";
import MyMessages from "../Chat/MyMessages";

const Home = () => {
  return (
    <div className="Home-container">
      <Headerdata className="headerdata" />
      <Sidebar className="sidebar" />
      <div className="contentt">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Rateus" element={<Rateus />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Chat" element={<MyMessages />} />
        </Routes>
      </div>
    </div>
  );
};
export default Home;
