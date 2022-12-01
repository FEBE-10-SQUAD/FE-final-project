import React from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import Seacrh from "../components/Status/Search";
import Filter from "../components/Status/Filter";
import "../assets/css/Status.css";
import Cards from "../components/Status/Cards";
import StatusAdmission from "./StatusAdmission";


const Status = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='row'>
          <div className="col-7">
              <div className='satu'>
                  <div className="regis">
                  <Link to="/status">Registration </Link>
                  </div>
                  <div className="adm">
                  <Link to="/StatusAdmission"> Admission</Link>
                  </div>
              </div>
              <div className='dua'>
                <Seacrh/>
                <Filter/>
              </div>
              <div className="cards">
                <Cards/>
             
              </div>
          </div>
        <div className="col-5">
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default Status;
