
import AOS from "aos";
import { Navigate, Route, Routes } from "react-router-dom";

import "./assets/css/App.css";

import AppLayout from "./AppLayout";
import LandingPage from "./pages/LandingPage";
import JobVacancy from "./pages/JobVacancy";
import JobDetail from "./pages/JobDetail";
import Status from "./pages/Status";
import ListBookmark from "./pages/ListBookmark";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import SavedOffers from "./pages/ProfilePage/SavedOffers";
import UploadDocuments from "./pages/ProfilePage/UploadDocuments";

const App = () => {
  AOS.init();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/JobVacancy" element={<JobVacancy />} />
          <Route path="/JobDetail/:jobId" element={<JobDetail />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/ListBookmark" element={<ListBookmark />} />
          <Route path="/ProfilePage">
            <Route path="/ProfilePage/" element={<ProfilePage />} />
            <Route path="/ProfilePage/saved-offers" element={<SavedOffers />} />
            <Route
              path="/ProfilePage/up-doc"
              element={
                localStorage.getItem("user-info") ? (
                  <UploadDocuments />
                ) : (
                  <Navigate replace to={"/login"} />
                )
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
