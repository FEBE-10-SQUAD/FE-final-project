import React from "react";
import NavBar from "../../components/NavBar";
import ProfileMenu from "../../components/ProfilePage/ProfileMenu";

const SavedOffers = () => {
  return (
    <>
      <NavBar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">saved offers</div>
        </div>
      </div>
    </>
  );
};

export default SavedOffers;
