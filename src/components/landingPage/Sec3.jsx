import React from "react";

const Sec3 = () => {
  return (
    <section id="aboutUs">
      <div id="bestJob">
        <div className="bestJob-img">
          <img src="bestjob.png" alt="" width="600"></img>
        </div>
        <div className="bestJob-text">
          <h3>Best Job Seeker In Indonesia</h3>
          <p>
            Looking for a job with Jobsidian provides more attractive offers,
            accurate information, and the best quality service for finding jobs.
          </p>
          <div className="checkbox">
            <i className="bx bxs-checkbox-checked">
              Search for jobs with many categories.
            </i>
            <i className="bx bxs-checkbox-checked">
              Accurate information about job vacancies.
            </i>
            <i className="bx bxs-checkbox-checked">
              Partners who have good prospects in the future.
            </i>
            <i className="bx bxs-checkbox-checked">Provide 24 hour service.</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
