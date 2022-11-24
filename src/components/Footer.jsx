import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="f-about" data-aos="fade-right">
        <h3 id="h-footer">About</h3>
        <p>
          A feature to connect companies and communities affected by COVID who
          are looking for work. companies can register as bidders and users can
          select bidders based on their needs and educational background.
        </p>
      </div>
      <div id="f-link" data-aos="fade-up">
        <h3 id="h-footer">Link</h3>
        <ul>
          <li className="li-footer">
            <a href="/">Home</a>
          </li>
          <li className="li-footer">
            <a href="/jobVacancy">Job Vacancy</a>
          </li>
          <li className="li-footer">
            <a href="/status">Status</a>
          </li>
        </ul>
      </div>
      <div id="f-contact" data-aos="fade-left">
        <h3 id="h-footer">Contact us</h3>
        <p className="p-footer">081356747675</p>
        <p className="p-footer">jobsidian@gmail.com</p>
        <div id="sosmed">
          <a href="">
            <i className="ssmd bx bxl-instagram-alt"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-facebook-circle"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-github"></i>
          </a>
          <a href="">
            <i className="ssmd bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
