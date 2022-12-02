import "../assets/css/Login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { login } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import loginImage from "../assets/images/login.png"

const Login = () => {
  // const { token, user, role } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailField = useRef();
  const passwordField = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userToLoginPayload = {
        email: emailField.current.value,
        password: passwordField.current.value,
      };

      console.log(userToLoginPayload);

      const loginRequest = await axios.post(
        `https://be-final-project-production.up.railway.app/login`,
        userToLoginPayload
      );

      const loginResponse = loginRequest.data;

      console.log(loginResponse.data);

      alert(loginResponse.message);

      if (loginResponse.status) {
        const token = loginResponse.data.token;

        const getCurrentUser = await axios.get(
          `https://be-final-project-production.up.railway.app/login/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const currentUser = getCurrentUser.data.data.currentUser;

        const role = currentUser.role;

        dispatch(
          login({
            token: token,
            role: role,
            user: currentUser,
          })
        );

        navigate("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Login">
        <div className="section-image">
          <img src="login.png" />
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
          <form className="login-form">
            <div className="login-title">
              <h2>Login</h2>
            </div>
            <div className="login-input">
              <div className="input-element">
                <i className="bx bx-envelope"></i>
                <input type="text" placeholder="email" ref={emailField} />
              </div>
              <div className="input-element">
                <i className="bx bx-key"></i>
                <input
                  type="password"
                  placeholder="password"
                  ref={passwordField}
                />
              </div>
              <div className="input-element-button">
                <button onClick={handleSubmit}>Login</button>
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
