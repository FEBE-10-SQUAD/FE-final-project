import "../assets/css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
// import loginimg from "../../public/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);

    if (email !== "") {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Email format doesnt valid!");
      }
    } else {
      setEmailError("Email is required!");
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);

    if (password !== "") {
      //check
    } else {
      setPasswordError("Password is required!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email !== "") {
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Email format doesnt valid!");
      }
    } else {
      setEmailError("Email is required!");
    }

    if (password !== "") {
      //check
    } else {
      setPasswordError("Password is required!");
    }

    if (email !== "" && emailRegex.test(email) && password !== "") {
      login();
      setEmail("");
      setPassword("");
    }
  };

  async function login() {
    const data = { email, password };

    try {
      let result = await fetch(
        "https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/users",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );

      window.location.href = "/";

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      // history.push("/JobVacancy");

      console.log(
        "Congratulations! Your account has been successfully created!",
        result
      );
    } catch (error) {
      console.log("Failed!");
    }
  }

  return (
    <>
      <Navbar />
      <div className="Login">
        <div className="section-image">
          <img src="login.png" alt="" />
        </div>
        <div className="section-form">
          <div className="signup">
            <h4>dont have an account?</h4>
            <Link to="/signup">
              <button>
                <span>Sign Up</span>
              </button>
            </Link>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-title">
              <h2>Login</h2>
            </div>
            <div className="login-input">
              <div className="input-element">
                <i className="bx bx-envelope"></i>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="error-msg">{emailError}</div>}
              </div>
              <div className="input-element">
                <i className="bx bx-key"></i>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <div className="error-msg">{passwordError}</div>
                )}
              </div>
              <div className="input-element-button">
                <button type="submit">Login</button>
              </div>
            </div>
            <div className="connect-google"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
