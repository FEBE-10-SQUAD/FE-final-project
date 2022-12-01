import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";

const Status = () => {
  // const context = useContext(AppContext);

  const [userLogin, setUserLogin] = useState({});
  const [jobsData, setJobsData] = useState([]);

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
      } catch (err) {
        alert(err.message);
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
        alert(err.message);
      }
    };

    getJobsData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1>Status</h1>
      <ul>
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
      </ul>
    </div>
  );
};

export default Status;
