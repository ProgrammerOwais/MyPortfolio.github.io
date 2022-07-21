import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer parent-container">
      <div className="sec8 sub-container">
        <p className="foot-para">
          © 2022 Created By 🤍 <span>Muhammad Owais</span>
        </p>
        <div className="foot-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
