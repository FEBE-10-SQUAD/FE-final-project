import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/Status.css";
import Navbar from "../components/NavBar";
import Seacrh from "../components/Status/Search";
import Filter from "../components/Status/Filter";

const Status = () => {
  // const context = useContext(AppContext);

  const [userLogin, setUserLogin] = useState({});
  const [jobsData, setJobsData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserLogin = async () => {
      try {
        const token = localStorage.getItem("token");

        const getCurrentUserRequest = await axios.get(
          `https://be-final-project-production.up.railway.app/login/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const getCurrentUserResponse =
          getCurrentUserRequest.data.data.currentUser;

        setUserLogin(getCurrentUserResponse);
      } catch (e) {
        navigate(`/login`);
      }
    };

    getUserLogin();
  }, []);

  const id = userLogin._id;

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const token = localStorage.getItem("token");

        const getJobsRequest = await axios.get(
          `https://be-final-project-production.up.railway.app/v1/apply-job/users/${id}/status`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const getJobsResponse = getJobsRequest.data;

        console.log(getJobsResponse.data);

        setJobsData(getJobsResponse.data);
      } catch (err) {
        alert(err);
      }
    };

    getJobsData();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="satu">
              <div className="regis">
                <Link to="/status">Registration </Link>
              </div>
              <div className="adm">
                <Link to="/StatusAdmission"> Admission</Link>

              </div>
            </div>
            <div className="dua">
              <Seacrh />
              
            </div>
            <div className="cards">
              {jobsData &&
                jobsData.map((item) => {
                  return (
                    <li key={item._id}>
                      <h2>{item.companyId && item.companyId.username}</h2>
                      <h4>{item.jobId && item.jobId.name}</h4>
                      <h4>{item.isAccepted ? "Diterima" : "Terkirm"}</h4>
                    </li>
                  );
                })}
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Status;
