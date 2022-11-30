import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

import Navbar from "../components/NavBar";
import "../assets/css/JobVacancy.css";

const JobVacancy = () => {
  const context = useContext(AppContext);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  // console.log(context);

  // ----------------------------------------------------------

  const handleCancelBookmark = () => {
    console.log("cancel cuy");
  };

  const handleDetail = (Id) => {
    navigation(`/JobDetail/${Id}`);
  };

  // ----------------------------------------------------------

  const [isBookmark, setIsBookmark] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar />

      <div id="container">
        {/* //----------------------------------SEARCHBAR---------------------------------------------- */}
        <form id="searchBar" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="input-search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="find job that you need..."
          />
          <button id="btn-search" name="search" value="search">
            Find
          </button>
        </form>

        {/* //----------------------------------CATEGORIES---------------------------------------------- */}
        <div id="cate">
          <div id="h-cate">
            <h4>Categories</h4>
          </div>

          <div id="categories">
            {context.jobs.slice(0, 6).map((item) => (
              <div key={item.jobId} className="card">
                <div id="card-cate" onClick={() => console.log("category 2")}>
                  <div id="name-cate">
                    <h4>{item.category}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* //----------------------------------RECOMMENDATION---------------------------------------------- */}
        <div id="recom">
          <div id="h-recom">
            <h4>Recommendation</h4>
          </div>
          <div id="recomjob">
            {context.errors ? (
              <div id="error">
                <p>
                  <span>{context.errors}</span>
                  PLease check your connections!
                </p>
              </div>
            ) : context.loading ? (
              context.jobs
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) => (
                  <div key={item.jobId} data-aos="fade-up">
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
                              <p>{item.employee}</p>
                            </div>
                          </div>

                          <div id="detail-kanan"></div>
                        </div>
                      </div>{" "}
                      <div id="kanan">
                        <div id="parent-btn-detail" href="#">
                          <button
                            onClick={() => handleDetail(item.jobId)}
                            id="btn-detail"
                            name="detail"
                            value="detail"
                          >
                            view detail
                          </button>
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
            ) : (
              <div id="loading">
                <div className="loadingWrap">
                  <i className="bx bx-loader"></i>
                  <span className="loadingText">loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
