import React from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="menu-box">
      <ul>
        <NavLink to="/ProfilePage/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <li>
            <i className="fi fi-rr-user" />
            <i className="fi fi-sr-user"></i>
            <span>Profile</span>
          </li>
        </NavLink>
        <NavLink to="/ProfilePage/saved-offers" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <li>
            <i className="fi fi-rr-bookmark"></i>
            <i className="fi fi-sr-bookmark"></i>
            <span>Saved Offers</span>
          </li>
        </NavLink>
        <NavLink to="/ProfilePage/up-doc" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <li>
            <i className="fi fi-rr-upload"></i>
            <i className="fi fi-br-upload"></i>
            <span>Upload Documents</span>
          </li>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          <li>
            <i className="fi fi-rr-sign-out-alt"></i>
            <i className="fi fi-br-sign-out-alt"></i>
            <span>Logout</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileMenu;
