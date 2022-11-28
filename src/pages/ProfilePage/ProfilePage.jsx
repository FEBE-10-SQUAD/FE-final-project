import "../../assets/css/ProfilePage.css";
import pfp from "../../../public/pfp.jpeg";
import { useState } from "react";

import React from "react";
import Navbar from "../../components/Navbar";
import ModalEditProfile from "../../components/ModalEditProfile";
import ModalAboutMe from "../../components/ModalAboutMe";

import ProfileMenu from "../../components/ProfilePage/ProfileMenu";

const ProfilePage = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));

  const [openModal, setOpenModal] = useState(false);
  const [modalAboutMe, setModalAboutMe] = useState(false);
  return (
    <div>
      {openModal && <ModalEditProfile closeModal={setOpenModal} />}
      {modalAboutMe && <ModalAboutMe closedModal={setModalAboutMe} />}
      <Navbar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div className="edit-profile">
              <button
                className="editUserData"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Edit Profile
              </button>
            </div>
            <div className="profile-show">
              <img src={pfp} alt="" />
              <span>Nama User</span>
            </div>
            <div className="profile-info">
              <div className="profile-info-left">
                <ul>
                  <li>
                    <label htmlFor="phone-number">Phone Number</label>
                    <span>123456789</span>
                  </li>
                  <li>
                    <label htmlFor="gender">Gender</label>
                    <span>Female</span>
                  </li>
                  <li>
                    <label htmlFor="birthdate">Date of Birth</label>
                    <span>22 Februari 2002</span>
                  </li>
                </ul>
              </div>
              <div className="profile-info-right">
                <ul>
                  <li>
                    <label htmlFor="city">City</label>
                    <span>Lampung</span>
                  </li>
                  <li>
                    <label htmlFor="address">Address</label>
                    <span>Jl. Raya Lampung</span>
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <span>{user.email}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="detil-info">
              <span>Detil Info</span>
              <div className="about-me">
                <h4>About Me</h4>
                <button
                  onClick={() => {
                    setModalAboutMe(true);
                  }}
                >
                  <i className="fi fi-rr-add"></i>
                  <span>Add Description</span>
                </button>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis cupiditate error asperiores hic rerum laborum iure excepturi sit. Optio aspernatur, ratione animi voluptate iusto eveniet officiis aliquid ducimus
                  doloremque.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
