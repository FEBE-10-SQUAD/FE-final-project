import React, { useContext } from "react";
import Navbar from "../components/NavBar";
import { AppContext } from "../context";

const Status = () => {
  const context = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <h1>Status</h1>
      <ul>
        {context.appliedJobs.map((item) => {
          <li key={item.jobId}>
            <h1>{item.companyId}</h1>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Status;
