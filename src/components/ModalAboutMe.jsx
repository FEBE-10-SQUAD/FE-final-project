import React from "react";
import "../assets/css/Modal.css";

const ModalAboutMe = ({ closedModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer2">
        <div className="modalTitle">
          <h5>About Me</h5>
          <button onClick={() => closedModal(false)}>
            <span> X </span>
          </button>
        </div>
        <div className="modalBody">
          <div className="about-me-desc">
            <p>Tell about yourself so employers understand you more easily.</p>
            <input type="text" />
          </div>
        </div>
        <div className="modalFooter">
          <button className="cancelButton" onClick={() => closedModal(false)}>
            Cancel
          </button>
          <button className="saveButton">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAboutMe;
