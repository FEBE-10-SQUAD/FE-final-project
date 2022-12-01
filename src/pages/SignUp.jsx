import "../assets/css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/NavBar";
// import signUpimg from "../../public/signup.svg";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const emailField = useRef();
  const passwordField = useRef();
  const usernameField = useRef();
  const roleField = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerPayload = {
        email: emailField.current.value,
        password: passwordField.current.value,
        username: usernameField.current.value,
        role: roleField.current.value,
      };

      console.log(registerPayload);

      const registerRequest = await axios.post(
        "https://be-final-project-production.up.railway.app/register",
        registerPayload
      );

      const registerResponse = registerRequest.data;

      alert(registerResponse.message);

      if (registerResponse.status) navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

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
              <input type="text" placeholder="email" ref={emailField} />
            </div>
            <div className="input-element">
              <i className="bx bx-user"></i>
              <input type="text" placeholder="username" ref={usernameField} />
            </div>
            <div className="input-element">
              <i className="bx bx-key"></i>
              <input
                type="password"
                placeholder="password"
                ref={passwordField}
              />
            </div>
            <div className="input-element">
              <i class="bx bxs-universal-access"></i>
              <input type="text" placeholder="role" ref={roleField} />
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
