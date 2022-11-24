import "../assets/css/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
// import signUpimg from "../../public/signup.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [password2, setPassword2] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);

    if (email !== "") {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Email format doesn't valid!");
      }
    } else {
      setEmailError("Email is required!");
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneError("");
    setPhone(e.target.value);

    if (phone !== "") {
      const phoneRegex = /[0-9]$/;
      if (phoneRegex.test(phone)) {
        setPhoneError("");
      } else {
        setPhoneError("Phone format doesnt valid!");
      }
    } else {
      setPhoneError("Phone is required!");
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

  const handlePassword2Change = (e) => {
    setPassword2Error("");
    setPassword2(e.target.value);

    if (password2 !== "") {
      //
    } else {
      setPassword2Error("Confirm password is required!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /[0-9]$/;

    if (email !== "") {
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Email format doesnt valid!");
      }
    } else {
      setEmailError("Email is required!");
    }

    if (phone !== "") {
      if (phoneRegex.test(phone)) {
        setPhoneError("");
      } else {
        setPhoneError("Phone format doesn't valid!");
      }
    } else {
      setPhoneError("Phone is required!");
    }

    if (password !== "") {
      //check
    } else {
      setPasswordError("Password is required!");
    }

    if (password2 !== "") {
      if (password === password2) {
        setPassword2Error("");
      } else {
        setPassword2Error("Passwords does not match!");
      }
    } else {
      setPassword2Error("Confirm password is required!");
    }

    if (
      email !== "" &&
      emailRegex.test(email) &&
      phone !== "" &&
      phoneRegex.test(phone) &&
      password !== "" &&
      password2 !== "" &&
      password === password2
    ) {
      signUp();
      setEmail("");
      setPhone("");
      setPassword("");
      setPassword2("");
    }
  };

  async function signUp() {
    const data = { email, phone, password, password2 };
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

      window.location.href = "/JobVacancy";

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));

      console.log(
        "Congratulations! Your account has been successfully created!",
        result
      );
    } catch (error) {
      console.log("Failed!");
    }
  }

  return (
    <div className="Signup">
      <Navbar />
      <div className="login">
        <h4>already have an account?</h4>
        <Link to="/login">
          <button>
            <span>Login</span>
          </button>
        </Link>
      </div>
      <div className="signup-section">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-title">
            <h2>Sign Up</h2>
          </div>
          <div className="signup-input">
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
              <i className="bx bxs-phone"></i>
              <input
                type="text"
                placeholder="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError && <div className="error-msg">{phoneError}</div>}
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
            <div className="input-element">
              <i className="bx bx-key"></i>
              <input
                type="password"
                placeholder="confirm password"
                value={password2}
                onChange={handlePassword2Change}
              />
              {password2Error && (
                <div className="error-msg">{password2Error}</div>
              )}
            </div>
            <div className="input-element-button">
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
        <div className="signup-img">
          <img src="signup.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
