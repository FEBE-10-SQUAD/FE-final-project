import AOS from "aos";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context";
import { useEffect, useState } from "react";

import "./assets/css/App.css";

import AppLayout from "./AppLayout";
import LandingPage from "./pages/LandingPage";
import JobVacancy from "./pages/JobVacancy";
import JobDetail from "./pages/JobDetail";
import Status from "./pages/Status";
import ListBookmark from "./pages/ListBookmark";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// ------------------------------------------------------------------------------
const JOB_EP = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/jobs `;

const App = () => {
  AOS.init();

  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  // ----------------------------------------------------------

  async function GetDataJobs() {
    try {
      let resp = await axios.get(JOB_EP);
      setJobs(resp.data);
      // console.log(resp.data);
      setLoading(!loading);
    } catch (e) {
      // errors(true);
      setErrors(e.message);
    }
  }

  useEffect(() => {
    GetDataJobs();
  }, []);

  // ----------------------------------------------------------

  const appContextValue = {
    jobs,
    errors,
    loading,
  };
  // console.log(appContextValue);

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/JobVacancy" element={<JobVacancy />} />
            <Route path="/JobDetail/:id" element={<JobDetail />} />
            <Route path="/Status" element={<Status />} />
            <Route path="/ListBookmark" element={<ListBookmark />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
};

export default App;
