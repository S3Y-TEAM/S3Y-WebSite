import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Lottie from "react-lottie";
import loadingAnimation from "../Animation - 1710016506072.json";

const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    if (!userType) {
      alert("Please select a user type.");
      return;
    }
    setIsSubmit(true);

    // const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    // if (registeredUsers.some(user => user.username === formValues.username)) {
    //   setFormErrors({ username: 'Username is already taken. Please choose another one.' });
    //   return;
    // }
    //   const newUser = { ...formValues};
    //   registeredUsers.push(newUser);

    // localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    localStorage.setItem("mode", "registered");
    localStorage.setItem("form values", formValues);
    localStorage.setItem("user Type", userType);
    localStorage.setItem("fullName", formValues.fullname);
    localStorage.setItem("userName", formValues.username);
    localStorage.setItem("Password", formValues.password);
    setFormErrors(validate(formValues));

    // Navigate only if the username is available
    // navigate("/Experiance", { state: { userName: formValues.username } });

    let role;
    if (userType === "developer") {
      role = "dev";
    } else if (userType === "skilledworker") {
      role = "worker";
    } else if (userType === "normaluser") {
      role = "emp";
    }
    localStorage.setItem("role", role);
    console.log("role=", role);

    fetch("https://s3y.onrender.com/api/v1/username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Role: role,
      },
      body: JSON.stringify({ userName: formValues.username }),
    })
      .then((response) => {
        const authorizationHeader = response.headers.get("authorization");
        const token = authorizationHeader
          ? authorizationHeader.split(" ")[1]
          : null;
        localStorage.setItem("jwtToken", token);
        console.log("token:", token);

        if (!response.ok) {
          //alert('Username is already taken. Please choose another one.');
          setFormErrors({
            username: "Username is already taken. Please choose another one.",
          });
          return response.json().then((response) => {
            throw new Error(
              `HTTP error! Status: ${response.status}, Message: ${response.message}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        if (userType === "normaluser") {
          navigate("/NationalData");
        } else if (userType) {
          console.log(formValues, userType);
          navigate("/Experiance");
        }
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     if (userType === "normaluser") {
  //       navigate("/NationalData");
  //     } else if (userType) {
  //       console.log(formValues, userType);
  //       navigate("/Experiance");
  //     }
  //   }
  // }, [formErrors, isSubmit, userType]);

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "required!";
    }
    if (!values.username) {
      errors.username = "required!";
    }

    if (!values.password) {
      errors.password = "required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "required!";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Passwords Don't Match";
    }
    return errors;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section>
        <div className="signuppage">
          <span className="bg-animate2"></span>
          <div className="form-box register">
            <form action="#">
              <Lottie
                options={defaultOptions}
                height={80}
                width={80}
                style={{ marginRight: "440px" }}
              />
              <h3>Sign-up to S3Y</h3>

              <div className="input-box">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  value={formValues.fullname}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.fullname ? "2px solid red" : null,
                  }}
                />
              </div>
              <p className="text-danger">{formErrors.fullname}</p>

              <div className="input-box">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.username ? "2px solid red" : null,
                  }}
                />
              </div>
              <p className="text-danger">{formErrors.username}</p>

              <div className="input-box">
                {showPassword ? (
                  <FaEyeSlash
                    className="icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye className="icon" onClick={togglePasswordVisibility} />
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.password ? "2px solid red" : null,
                  }}
                />
              </div>
              <p className="text-danger">{formErrors.password}</p>

              <div className="input-box">
                {showPassword ? (
                  <FaEyeSlash
                    className="icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye className="icon" onClick={togglePasswordVisibility} />
                )}
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.confirmpassword
                      ? "2px solid red"
                      : null,
                  }}
                />
              </div>
              <p className="text-danger">{formErrors.confirmpassword}</p>

              <div className="type">Are You?</div>
              <div className="radiobtn">
                <label className="userTypes">
                  <input
                    type="radio"
                    name="userType"
                    value="developer"
                    checked={userType === "developer"}
                    onChange={handleUserTypeChange}
                  />
                  Developer
                </label>
                <label className="userTypes">
                  <input
                    type="radio"
                    name="userType"
                    value="skilledworker"
                    checked={userType === "skilledworker"}
                    onChange={handleUserTypeChange}
                  />
                  Skilled Worker
                </label>
                <label className="userTypes">
                  <input
                    type="radio"
                    name="userType"
                    value="normaluser"
                    checked={userType === "normaluser"}
                    onChange={handleUserTypeChange}
                  />
                  User
                </label>
              </div>

              <button
                className="btn"
                id="btn"
                type="submit"
                onClick={handleSubmit}
              >
                Next
              </button>

              <div className="logreg-link">
                <p>
                  already have an account ?{" "}
                  <Link to="/Login" className="link">
                    <u>Login</u>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="logoreg">
            <img src={require("../images/Group 18 (2).png")} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;