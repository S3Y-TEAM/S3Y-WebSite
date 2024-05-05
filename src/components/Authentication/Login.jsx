import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import loadingAnimation from "../Animation - 1710214318614.json";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedType, setSelectedType] = useState([]);
  const { login, error, isLoading } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTypeClick = (option, e) => {
    e.preventDefault();
    setSelectedType(selectedType === option ? "" : option);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (selectedType.length === 0) {
      alert("Please select your Type.");
      return;
    }

    if (Object.keys(formErrors).length === 0) {
      await login(formValues.email, formValues.password, selectedType);
      // const storedUser = JSON.parse(localStorage.getItem("FullStore"));
      // if (storedUser) {
      //   const user = storedUser.find(u => u.Email === formValues.email && u.Password === formValues.password);
      //   if (user) {
      //     setIsSubmit(true);
      //     localStorage.setItem("mode", "registered");
      //     localStorage.setItem("currentUserName" ,user.user_name)
      //     navigate("/LoginSuccess");
      //     console.log(user);

      //     if (formValues.rememberMe) {
      //           localStorage.setItem("loggedInUser", JSON.stringify({formValues,selectedType}));
      //         } else {
      //           localStorage.removeItem("loggedInUser");
      //         }
      //   }
      // else {
      //     setFormErrors({ email: "Invalid email or password" });
      //   }
    } else {
      console.log("form errors", formErrors);
      setFormErrors({ email: "Invalid email or password" });
    }
  };

  // let role;
  // if (selectedType === "Developer") {
  //   role = "dev";
  // } else if (selectedType === "skilledworker") {
  //   role = "worker";
  // } else if (selectedType === "User") {
  //   role = "emp";
  // }
  // localStorage.setItem('rolelogin',role)
  // console.log('rolelogin=',role)

  // fetch("https://s3y.onrender.com/api/v1/signin", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Role": role,
  //   },
  //   body: JSON.stringify({ email: formValues.email ,password:formValues.password }),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       return response.json().then((response) => {
  //         throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.message}`);
  //       });
  //     }
  //     localStorage.setItem("mode", "registerd");
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log("API Response:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error making API request:", error);
  //   });

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     setFormValues(JSON.parse(loggedInUser));
  //     navigate("/LoginSuccess");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit && selectedType) {
  //     if (localStorage.getItem("mode") === "registerd") {
  //       navigate("/LoginSuccess");
  //     }
  //   }
  // }, [formErrors, isSubmit, selectedType]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
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
    <div>
      <section>
        <div className="loginpage">
          <span className="bg-animate"></span>
          <div className="form-box login">
            <form action="#">
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                style={{ marginRight: "440px", marginBottom: "10px" }}
              />
              <h3>Welcome Back To S3Y</h3>

              <h5>you login as..?</h5>
              <div className="usertypebtns">
                <button
                  onClick={(e) => {
                    handleTypeClick("Developer", e);
                  }}
                  className="usretypeButton"
                  value="developer"
                  style={{
                    backgroundColor:
                      selectedType === "Developer" ? "#164863" : "white",
                    color: selectedType === "Developer" ? "white" : "#164863",
                  }}
                >
                  Developer
                </button>

                <button
                  onClick={(e) => {
                    handleTypeClick("skilledworker", e);
                  }}
                  className="usretypeButton"
                  name="skilledworker"
                  style={{
                    backgroundColor:
                      selectedType === "skilledworker" ? "#164863" : "white",
                    color:
                      selectedType === "skilledworker" ? "white" : "#164863",
                  }}
                >
                  Skilled Worker
                </button>
                <button
                  onClick={(e) => {
                    handleTypeClick("emp", e);
                  }}
                  className="usretypeButton"
                  value="normaluser"
                  style={{
                    backgroundColor:
                      selectedType === "emp" ? "#164863" : "white",
                    color: selectedType === "emp" ? "white" : "#164863",
                  }}
                >
                  User
                </button>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.email ? "2px solid red" : null,
                  }}
                />
                <FaEnvelope className="icon" />
              </div>
              <p className="text-danger">{formErrors.email}</p>

              <div className="input-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  value={formValues.password}
                  onChange={handleChange}
                  style={{
                    borderBottom: formErrors.password ? "2px solid red" : null,
                  }}
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye className="icon" onClick={togglePasswordVisibility} />
                )}
              </div>
              <p className="text-danger">{formErrors.password}</p>

              <div className="remforget">
                <div className="Remember-me">
                  <label>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formValues.rememberMe}
                      onChange={handleChange}
                    />
                    Remember me
                  </label>
                </div>
                <p>
                  <Link to="/ForgetPassword" className="link">
                    Forget Password?
                  </Link>
                </p>
              </div>
              {error && <div className="error">{error}</div>}
              <button
                className="btn"
                id="btn"
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                Login
              </button>
              <div className="logreg-link">
                <p>
                  Don't have an account ?{" "}
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="logo">
            <img src={require("../images/Group 18 (2).png")} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
