import "../assets/css/JobDetail.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const JobDetail = () => {
  const navigation = useNavigate();

  const [isApplyLoading, setIsApplyLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useLocation();

  const id = params.pathname.split("/")[2];

  const [jobsData, setJobsData] = useState([]);

  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    const getJobsData = async (e) => {
      try {
        const getJobsRequest = await axios.get(
          `https://be-final-project-production.up.railway.app/v1/admin/jobs/${id}`
        );

        const getJobsResponse = getJobsRequest.data;
        setLoading(!loading);
        setJobsData(getJobsResponse.data);
      } catch (err) {
        alert(err.message);
      }
    };

    getJobsData();
  }, [id]);

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

  // --------------------------------------------------------------------------------------

  const handleBack = () => {
    navigation(`/JobVacancy`);
  };

  // // --------------------------------------------------------------------------------------
  const handlePostApply = async () => {
    try {
      const token = localStorage.getItem("token");

      const applyPayload = {
        companyId: jobsData.companyId,
        jobId: jobsData._id,
        userId: userLogin._id,
        isAccepted: false,
      };

      console.log(applyPayload);

      setIsApplyLoading(!isApplyLoading);
      console.log("loading post data. . . ");
      const applyRequest = await axios.post(
        `https://be-final-project-production.up.railway.app/v1/apply-job/users`,
        applyPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(applyRequest);

      const applyResponse = applyRequest.data;

      alert(applyResponse.message);

      if (applyResponse.status) {
        setIsAccepted(!isAccepted);
        setTimeout(() => {
          setIsApplyLoading(false);
        }, 1500);
        console.log("success apply", responsePost);
      }
      navigation("/Status");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleCancelApplied = () => {
    alert("are you sure want to cancel this job?");
  };

  // --------------------------------------------------------------------------------------

  return (
    <>
      {/* {jobsError.status ? (
        <div id="error">
          <p>
            <span>{jobsError.message}</span>
          </p>
        </div>
      ) : jobsData.status ? ( */}
      {/* {jobsData.map((data) =>  */}
      <div key={jobsData._id}>
        <i
          onClick={handleBack}
          id="left-arrow"
          className="bx bx-left-arrow-alt"
        ></i>
        <div id="contParent">
          <div id="contChild">
            <div id="img-company">
              <img src={jobsData.image} alt="" />
            </div>

            <div id="jobAddress">
              <h1 id="h-posisi">
                <b>{jobsData.name}</b>
              </h1>
              <div id="h-company">
                <h4 id="company">{jobsData.company}</h4>
                <h4 id="address">{jobsData.city}</h4>
              </div>
            </div>

            <div id="termAndCond">
              <div id="r-exp">
                <h3 id="h-exp">EXPERIENCE</h3>
                <p id="p-exp">{jobsData.exp}</p>
              </div>
              <div id="r-empl">
                <h3 id="h-empl">EMPLOYEE TYPE</h3>
                <p id="p-empl">{jobsData.employee}</p>
              </div>
              <div id="r-offer">
                <h3 id="h-offer">OFFER SALARY</h3>
                <p id="p-offer">{jobsData.salary}</p>
              </div>
            </div>

            <div id="jobDescription">
              <h2 id="h-jobDesc">
                <b>Job Description</b>
              </h2>
              <div id="descList">
                <div className="li">
                  <i className="bx bx-check-circle"></i>
                  <h3>Search for jobs for many category.</h3>
                </div>
                <div className="li">
                  <i className="bx bx-check-circle"></i>
                  <h3>Accurate information about job vacancies.</h3>
                </div>
                <div className="li">
                  <i className="bx bx-check-circle"></i>
                  <h3>Partner who have good prospect for the future.</h3>
                </div>
                <div className="li">
                  <i className="bx bx-check-circle"></i>
                  <h3>Provide 24 hour service.</h3>
                </div>
              </div>

              <div id="p-desc">
                <p className="p" align="justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  repudiandae veniam odio beatae iure porro nesciunt ex odit
                  sunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cum distinctio vero libero porro nihil ipsa animi sunt
                  vel minus laborum temporibus delectus similique tempore
                  repellat.
                </p>
                <p className="p" align="justify">
                  Molestiae id amet adipisci culpa voluptatum! Eos error hic
                  repudiandae. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Minima sint, aspernatur, saepe ut quasi
                  asperiores esse unde veniam iste doloribus praesentium animi
                  autem deserunt tempora impedit. Ratione quasi error nulla?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  repudiandae veniam odio beatae iure porro nesciunt ex odit
                  sunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cum distinctio vero libero porro nihil ipsa animi sunt
                  vel minus laborum temporibus delectus similique tempore
                  repellat, officiis harum illo soluta enim.
                </p>
              </div>
            </div>

            {/* -----------------------APPLY JOB SESSION -------------------------- */}
            <button id="btn">
              {isApplyLoading ? (
                <span id="btn-loading">wait a second...</span>
              ) : isAccepted ? (
                <span onClick={handleCancelApplied} id="btn-applied">
                  Applied <i className="bx bxs-check-circle"></i>
                </span>
              ) : (
                <span onClick={handlePostApply} id="btn-apply">
                  Apply
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* //       );
          )} */}
      {/* // ) : ( */}
      {/* // -----------------------IF JOB-LOADING TRUE, THEN DISPLAY LOADING SPAN -------------------------- */}
      {/* //   <div id="loading">
      //     <div className="loadingWrap">
      //       <i className="bx bx-loader"></i>
      //       <span className="loadingText">loading...</span>
      //     </div>
      //   </div>
      // )} */}
    </>
  );
};

export default JobDetail;
