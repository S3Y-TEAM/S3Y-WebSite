import React from "react";
import "./LoginSuccess.css";

import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="loginsuccess">
        <img className="completed" src={require("../images/Completed 1.png")} />
        <h2>Sucessfully Loged in</h2>
        <button className="Letsstartbtn" onClick={() => navigate("/Home")}>
          Let's Start <img src={require("../images/Right Arrow.png")} />
        </button>
      </div>
    </section>
  );
};

export default LoginSuccess;
