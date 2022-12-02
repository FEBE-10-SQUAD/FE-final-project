import "../assets/css/LandingPage.css";
import "../assets/css/Btn-Up.css";

import Navbar from "../components/NavBar";
import Btn_Up from "../components/landingPage/Btn-Up";

import Sec1 from "../components/landingPage/Sec1";
import Sec2 from "../components/landingPage/Sec2";
import Sec3 from "../components/landingPage/Sec3";
import Sec4 from "../components/landingPage/Sec4";
// import Sec5 from "../components/landingPage/Sec5";
import Sec6 from "../components/landingPage/Sec6";
import Sec7 from "../components/landingPage/Sec7";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div id="top" className="LP_wrap">
        <Sec1 />
        <Sec2 />
        <img src="../namagambar" alt="" />
      </div>

      <a href="#top">
        <Btn_Up />
      </a>

      <div className="LP_wrap">
        <Sec3 />
        <Sec4 />
        {/* <Sec5 /> */}
        <Sec6 />
        <Sec7 />
      </div>
    </>
  );
};

export default LandingPage;
