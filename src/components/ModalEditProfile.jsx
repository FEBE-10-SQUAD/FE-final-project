import React from "react";
import "../assets/css/ModalEditProfile.css";
import pfp from "../../public/pfp.jpeg";

const ModalEditProfile = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h5>Edit Profile</h5>
          <button onClick={() => closeModal(false)}>
            <span> X </span>
          </button>
        </div>
        <div className="modalBody">
          <div className="profile-pic">
            <img src={pfp} alt="" id="photo" />
            <input type="file" id="file" />
            <label htmlFor="file" id="uploadBtn">
              Choose Photo
            </label>
          </div>
          <div className="all-input">
            <div className="profile-name">
              <input type="text" id="first-name" placeholder="first name" />
              <input type="text" id="last-name" placeholder="last name" />
            </div>
            <div className="phone-number">
              <input type="text" id="phone-number" placeholder="phone number" />
            </div>
            <div className="email">
              <input type="text" id="email" placeholder="email" />
            </div>
            <div className="city">
              <input type="text" id="city" placeholder="city" />
            </div>
            <div className="address">
              <input type="text" id="address" placeholder="address" />
            </div>
            <div className="birthdate">
              <input type="date" id="birthdate" placeholder="dd-mm-yyyy" />
            </div>
            <div className="gender">
              {/* <input type="text" id="gender" placeholder="gender" /> */}
              <select type="text" id="gender">
                <option className="invalid" value="" disabled selected hidden>
                  gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
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

export default ModalEditProfile;
