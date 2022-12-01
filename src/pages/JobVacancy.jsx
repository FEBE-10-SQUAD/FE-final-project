import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "../components/NavBar";
import "../assets/css/JobVacancy.css";
import axios from "axios";

const JobVacancy = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  // const [loading, setLoading] = useState(false);

  const [jobsData, setJobsData] = useState([]);
  const [category, setCategory] = useState([""]);

  const nameField = useRef();

  const getJobsData = async () => {
    const getNameJobData = nameField.current.value;

    try {
      const getJobsRequest = await axios.get(
        `https://be-final-project-production.up.railway.app/v1/admin/jobs?category=${category}&name=${getNameJobData}`
      );

      const getJobsResponse = getJobsRequest.data;

      // setLoading(!loading);
      setJobsData(getJobsResponse.data);
    } catch (err) {
      setErrors(err.message);
      alert(err.message);
    }
  };

  useEffect(() => {
    getJobsData();
  }, [category]);

  const onReset = () => {
    setCategory("");

    nameField.current.value = "";

    window.location.reload("/JobVacancy");
  };

  // ----------------------------------------------------------

  const handleCancelBookmark = () => {
    console.log("cancel cuy");
  };

  // ----------------------------------------------------------

  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <div>
      <Navbar />

      <div id="container">
        {/* //----------------------------------SEARCHBAR---------------------------------------------- */}
        <form id="searchBar" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="input-search"
            ref={nameField}
            placeholder="find job that you need..."
          />
          <button id="btn-search" onClick={getJobsData}>
            Find
          </button>
        </form>

        {/* //----------------------------------CATEGORIES---------------------------------------------- */}
        <div id="cate">
          <div id="h-cate">
            <h4>Categories</h4>
          </div>

          <div id="categories">
            <div onClick={onReset} className="card">
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Semua</h4>
                </div>
              </div>
            </div>

            <div
              onClick={() => setCategory("Mobile Developer")}
              className="card"
            >
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Mobile Developer</h4>
                </div>
              </div>
            </div>

            <div
              onClick={() => setCategory("Backend Developer")}
              className="card"
            >
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Backend Developer</h4>
                </div>
              </div>
            </div>

            <div
              onClick={() => setCategory("Frontend Developer")}
              className="card"
            >
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Frontend Developer</h4>
                </div>
              </div>
            </div>

            <div onClick={() => setCategory("Data Science")} className="card">
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Data Science</h4>
                </div>
              </div>
            </div>

            <div onClick={() => setCategory("Architecture")} className="card">
              <div id="card-cate">
                <div id="name-cate">
                  <h4>Architecture</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //----------------------------------RECOMMENDATION---------------------------------------------- */}
        <div id="recom">
          <div id="h-recom">
            <h4>Recommendation</h4>
          </div>
          <div id="recomjob">
            {
              errors ? (
                <div id="error">
                  <p>
                    <span>{errors}</span>
                    PLease check your connections!
                  </p>
                </div>
              ) : (
                jobsData &&
                jobsData.map((item) => (
                  <div key={item._id} data-aos="fade-up">
                    <div className="job">
                      <div id="kiri">
                        <div id="icon-job">
                          <img src={item.image} alt="" />
                        </div>
                        <div id="details">
                          <div id="detail-kiri">
                            <div id="h-detail">
                              <h4>{item.name}</h4>
                            </div>
                            <div id="name-company">
                              <p>{item.company}</p>
                            </div>
                            <div id="employee">
                              <p>{item.employee} Employee</p>
                            </div>
                          </div>

                          <div id="detail-kanan"></div>
                        </div>
                      </div>{" "}
                      <div id="kanan">
                        <div id="parent-btn-detail" href="#">
                          <Link to={`/JobDetail/${item._id}`}>
                            <button
                              id="btn-detail"
                              name="detail"
                              value="detail"
                            >
                              view detail
                            </button>
                          </Link>
                        </div>
                        <div
                          onClick={() => dispatch(addToBookmark(item))}
                          id="icon-save"
                        >
                          {isBookmark ? (
                            <span
                              onClick={handleCancelBookmark}
                              id="icon-bookmark"
                            >
                              <i className="bx bxs-bookmark-plus"></i>
                            </span>
                          ) : (
                            <span id="icon-yetBookmark">
                              <i className="bx bx-bookmark-plus"></i>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )
              // ) : (
              //   <div id="loading">
              //     <div className="loadingWrap">
              //       <i className="bx bx-loader"></i>
              //       <span className="loadingText">loading...</span>
              //     </div>
              //   </div>
              // )
            }
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
