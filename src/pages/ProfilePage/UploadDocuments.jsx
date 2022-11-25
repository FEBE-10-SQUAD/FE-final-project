import React from "react";
import Navbar from "../../components/Navbar";
import ProfileMenu from "../../components/ProfilePage/ProfileMenu";

const UploadDocuments = () => {
  return (
    <>
      <Navbar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">upload documents here</div>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;
