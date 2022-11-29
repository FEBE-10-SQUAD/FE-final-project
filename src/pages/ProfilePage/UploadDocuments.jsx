import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import ProfileMenu from "../../components/ProfilePage/ProfileMenu";

import ModalCV from "../../components/modal/ModalCV";
import ModalCertification from "../../components/modal/ModalCertification";
import ModalOtherDocs from "../../components/modal/ModalOtherDocs";

const UploadDocuments = () => {
  const [modalCV, setModalCV] = useState(false);
  const [modalCertification, setModalCertification] = useState(false);
  const [modalOtherDocs, setModalOtherDocs] = useState(false);

  return (
    <>
      {modalCV && <ModalCV closeModal={setModalCV} />}
      {modalCertification && <ModalCertification closeModal={setModalCertification} />}
      {modalOtherDocs && <ModalOtherDocs closeModal={setModalOtherDocs} />}

      <Navbar />
      <div className="ProfilPage">
        <div className="profile-menu">
          <ProfileMenu />
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div className="about-me">
              <h4>Curriculum Vitae (CV)</h4>
              <button
                onClick={() => {
                  setModalCV(true);
                }}
              >
                <i className="fi fi-rr-add"></i>
                <span>Add Curriculum Vitae</span>
              </button>
            </div>
            <div className="about-me">
              <h4>Certification</h4>
              <button
                onClick={() => {
                  setModalCertification(true);
                }}
              >
                <i className="fi fi-rr-add"></i>
                <span>Add Certification</span>
              </button>
            </div>
            <div className="about-me">
              <h4>Other Documents</h4>
              <button
                onClick={() => {
                  setModalOtherDocs(true);
                }}
              >
                <i className="fi fi-rr-add"></i>
                <span>Add Other Documents</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;
