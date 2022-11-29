import "../assets/css/Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/features/userSlice";

const Login = () => {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);

    if (email !== "") {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      localStorage.setItem("user-info", JSON.stringify(user));
      window.location.href = "/";
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );

      console.log(user);
      setEmail("");
      setPassword("");
    }
  };

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
                <input type="text" placeholder="email" value={email} onChange={handleEmailChange} />
                {emailError && <div className="error-msg">{emailError}</div>}
              </div>
              <div className="input-element">
                <i className="bx bx-key"></i>
                <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
                {passwordError && <div className="error-msg">{passwordError}</div>}
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
