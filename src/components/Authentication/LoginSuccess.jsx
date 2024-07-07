import React from "react";
import "./LoginSuccess.css";

import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <section>
      <div className="loginsuccess">
        <img className="completed" src={require("../images/Completed 1.png")} />
        <h2>Sucessfully Loged in</h2>
        <button
          className="Letsstartbtn"
          onClick={() =>
            role === "emp" ? navigate("/UserHome") : navigate("/Home")
          }
        >
          Let's Start <img src={require("../images/Right Arrow.png")} />
        </button>
      </div>
    </section>
  );
};

export default LoginSuccess;
