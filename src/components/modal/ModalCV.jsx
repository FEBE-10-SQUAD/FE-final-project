import React from "react";
import "../../assets/css/Modal.css";

const ModalCV = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer3">
        <div className="modalTitle">
          <h5>Upload CV</h5>
          <button onClick={() => closeModal(false)}>
            <span> X </span>
          </button>
        </div>
        <div className="modalBody">
          <input type="file" id="file2" />
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

export default ModalCV;
