import React from "react";
import'./LoginSuccess.css';

const LoginSuccess = () => {
  return (
    <section>
    < div className="loginsuccess">
      <img className="completed" src={require("../images/Completed 1.png")}/>
      <h2>Sucessfully Loged in</h2>
      <button className="Letsstartbtn">Let's Start <img src={require("../images/Right Arrow.png")}/></button>
    </div>
    </section>
  );
};

export default LoginSuccess;