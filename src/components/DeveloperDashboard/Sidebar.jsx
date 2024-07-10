import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faListCheck,
  faBell,
  faComments,
  faBriefcase,
  faUser,
  faBookmark,
  faGear,
  faPhone,
  faPeopleGroup,
  faStar,
  faSun,
  faMoon,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const { logout } = useLogout();
  //const nav = Navigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    logout();
  };

  return (
    <div className="sidebar">
      <img src={require("../images/logosidebar2.png")} />
      <hr className="sidebar-divider my-0" />
      <ul>
        <li
          className={`nav-item ${activeItem === "Dashboard" ? "active" : ""}`}
        >
          <Link
            className="nav-link"
            to="/Home/Dashboard"
            onClick={() => handleItemClick("Dashboard")}
          >
            <div className="selector1">
              <span className="dashboard">
                <FontAwesomeIcon icon={faThLarge} className="dashboardicon" />
                Dashboard
              </span>
            </div>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "Tasks" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Tasks"
            onClick={() => handleItemClick("Tasks")}
          >
            <span>
              <FontAwesomeIcon icon={faListCheck} className="dashboardicon" />
              Tasks
            </span>
          </Link>
        </li>
        <li
          className={`nav-item ${
            activeItem === "Notification" ? "active" : ""
          }`}
        >
          <Link
            className="nav-link"
            to="/Home/Notification"
            onClick={() => handleItemClick("Notification")}
          >
            <span>
              <FontAwesomeIcon icon={faBell} className="dashboardicon" />
              Notification
            </span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "Chat" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Chat"
            onClick={() => handleItemClick("Chat")}
          >
            <span>
              <FontAwesomeIcon icon={faComments} className="dashboardicon" />
              Chat
            </span>
          </Link>
        </li>
        <li
          className={`nav-item ${activeItem === "AppliedJobs" ? "active" : ""}`}
        >
          <Link
            className="nav-link"
            to="/Home/AppliedJobs"
            onClick={() => handleItemClick("AppliedJobs")}
          >
            <span>
              <FontAwesomeIcon icon={faBriefcase} className="dashboardicon" />
              Applaying Jobs
            </span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "Profile" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Profile"
            onClick={() => handleItemClick("Profile")}
          >
            <span>
              <FontAwesomeIcon icon={faUser} className="dashboardicon" />
              Profile
            </span>
          </Link>
        </li>
        <li
          className={`nav-item ${activeItem === "Bookmarks" ? "active" : ""}`}
        >
          <Link
            className="nav-link"
            to="/Home/Bookmarks"
            onClick={() => handleItemClick("Bookmarks")}
          >
            <span>
              <FontAwesomeIcon icon={faBookmark} className="dashboardicon" />
              Bookmarks
            </span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "Setting" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Setting"
            onClick={() => handleItemClick("Setting")}
          >
            <span>
              <FontAwesomeIcon icon={faGear} className="dashboardicon" />
              Setting
            </span>
          </Link>
        </li>
        <li
          className={`nav-item ${activeItem === "ContactUs" ? "active" : ""}`}
        >
          <Link
            className="nav-link"
            to="/Home/Contactus"
            onClick={() => handleItemClick("ContactUs")}
          >
            <span>
              <FontAwesomeIcon icon={faPhone} className="dashboardicon" />
              Contact Us
            </span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "AboutUs" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Aboutus"
            onClick={() => handleItemClick("AboutUs")}
          >
            <span>
              <FontAwesomeIcon icon={faPeopleGroup} className="dashboardicon" />
              About Us
            </span>
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "RateUs" ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/Home/Rateus"
            onClick={() => handleItemClick("RateUs")}
          >
            <span>
              <FontAwesomeIcon icon={faStar} className="dashboardicon" />
              Rate Us
            </span>
          </Link>
        </li>
      </ul>

      <div className="containsunmoon" onClick={toggleDarkMode}>
        <div className={`togle ${!darkMode ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faSun}
            className={`sun ${!darkMode ? "active" : ""}`}
          />
        </div>
        <div className={`togle2 ${darkMode ? "active" : ""}`}>
          <FontAwesomeIcon
            icon={faMoon}
            className={`moon ${darkMode ? "active" : ""}`}
          />
        </div>
      </div>

      <button className="logout" onClick={handleLogout}>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="logouticon"
          onClick={handleLogout}
        />
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
