import React from "react";
import "../../assets/css/Modal.css";

const ModalAboutMe = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer2">
        <div className="modalTitle">
          <h5>About Me</h5>
          <button onClick={() => closeModal(false)}>
            <span> X </span>
          </button>
        </div>
        <div className="modalBody">
          <div className="about-me-desc">
            <p>Tell about yourself so employers understand you more easily. (150 char)</p>
            {/* <input type="text" /> */}
            <textarea name="about-me" id="about-me" maxLength="150" placeholder="Add an introduction about yourself"></textarea>
          </div>
        </div>
        <div className="modalFooter">
          <button className="cancelButton" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="saveButton">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAboutMe;
