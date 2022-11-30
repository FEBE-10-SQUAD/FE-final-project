import "../assets/css/JobDetail.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import axios from "axios";
import { APPLIED_JOB_EP } from "../App";

const JobDetail = () => {
  const { jobId } = useParams();
  const context = useContext(AppContext);
  const navigation = useNavigate();

  const [isApplyLoading, setIsApplyLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  // --------------------------------------------------------------------------------------

  const handleBack = () => {
    navigation(`/JobVacancy`);
  };

  // --------------------------------------------------------------------------------------
  const handlePostApply = async () => {
    const payload_appliedJob = {
      companyId: context.jobs.companyId,
      jobId: context.jobs.jobId,
      isAccepted,
    };

    setIsApplyLoading(!isApplyLoading);
    console.log("loading post data. . . ");
    const requestPost = await axios.post(APPLIED_JOB_EP, payload_appliedJob);

    const responsePost = [requestPost.data];

    if (requestPost.status) {
      setIsAccepted(!isAccepted);
      setTimeout(() => {
        setIsApplyLoading(false);
      }, 1500);
      console.log("success apply", responsePost);
    }

    // navigation(`/Status`);
  };

  const handleCancelApplied = () => {
    alert("are you sure want to cancel this job?");
  };

  // --------------------------------------------------------------------------------------

  return (
    <>
      {context.errors ? (
        <div id="error">
          <p>
            <span>{context.errors}</span>
            PLease check your connections!
          </p>
        </div>
      ) : context.loading ? (
        context.jobs
          .filter((data) => data.jobId === jobId)
          .map((data) => {
            return (
              <div key={data.jobId}>
                <i
                  onClick={handleBack}
                  id="left-arrow"
                  className="bx bx-left-arrow-alt"
                ></i>
                <div id="contParent">
                  <div id="contChild">
                    <div id="img-company">
                      <img src={data.image} alt="" />
                    </div>

                    <div id="jobAddress">
                      <h1 id="h-posisi">
                        <b>{data.name}</b>
                      </h1>
                      <div id="h-company">
                        <h4 id="company">{data.company}</h4>
                        <h4 id="address">{data.city}</h4>
                      </div>
                    </div>

                    <div id="termAndCond">
                      <div id="r-exp">
                        <h3 id="h-exp">EXPERIENCE</h3>
                        <p id="p-exp">{data.exp}</p>
                      </div>
                      <div id="r-empl">
                        <h3 id="h-empl">EMPLOYEE TYPE</h3>
                        <p id="p-empl">{data.employee}</p>
                      </div>
                      <div id="r-offer">
                        <h3 id="h-offer">OFFER SALARY</h3>
                        <p id="p-offer">{data.salary}</p>
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
                          <h3>
                            Partner who have good prospect for the future.
                          </h3>
                        </div>
                        <div className="li">
                          <i className="bx bx-check-circle"></i>
                          <h3>Provide 24 hour service.</h3>
                        </div>
                      </div>

                      <div id="p-desc">
                        <p className="p" align="justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut repudiandae veniam odio beatae iure porro
                          nesciunt ex odit sunt vitae. Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Cum distinctio vero
                          libero porro nihil ipsa animi sunt vel minus laborum
                          temporibus delectus similique tempore repellat.
                        </p>
                        <p className="p" align="justify">
                          Molestiae id amet adipisci culpa voluptatum! Eos error
                          hic repudiandae. Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Minima sint, aspernatur,
                          saepe ut quasi asperiores esse unde veniam iste
                          doloribus praesentium animi autem deserunt tempora
                          impedit. Ratione quasi error nulla? Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Ut repudiandae
                          veniam odio beatae iure porro nesciunt ex odit sunt
                          vitae. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Cum distinctio vero libero porro
                          nihil ipsa animi sunt vel minus laborum temporibus
                          delectus similique tempore repellat, officiis harum
                          illo soluta enim.
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
            );
          })
      ) : (
        // -----------------------IF JOB-LOADING TRUE, THEN DISPLAY LOADING SPAN --------------------------
        <div id="loading">
          <div className="loadingWrap">
            <i className="bx bx-loader"></i>
            <span className="loadingText">loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetail;
