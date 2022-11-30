import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));

  function logOut() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <nav id="sticky">
      <div id="logo">
        <h3>JOBSIDIAN</h3>
      </div>

      <ul id="page">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobVacancy">Job Vacancy</Link>
        </li>
        <li>
          <Link to="/status">Status</Link>
        </li>
        <li>
          <Link to="/listbookmark">List Bookmark</Link>
        </li>
      </ul>
      {localStorage.getItem("user-info") ? (
        <>
          <div className="section-right">
            <div id="profile">
              <h4 id="nameProfile">
                <i> Users</i>
              </h4>
              <div id="iconProfile">
                <Link to="/ProfilePage/">
                  <i className="bx bxs-user-circle"></i>
                </Link>
              </div>
            </div>
            <div className="logout-btn">
              <button>
                <span onClick={logOut}>Logout</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="login-btn">
            <Link to="/login">
              <button>
                <span>Login</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
