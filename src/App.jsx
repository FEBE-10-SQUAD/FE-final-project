import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import "./assets/css/App.css";

import LandingPage from "./pages/LandingPage";
import JobVacancy from "./pages/JobVacancy";
import JobDetail from "./pages/JobDetail";
import Status from "./pages/Status";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListBookmark from "./pages/ListBookmark";

import AOS from "aos";

const App = () => {
  AOS.init();

  return (
    <>
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
    </>
  );
};

export default App;
