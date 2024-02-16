import Design from "../images/design.png";
import technical from "../images/technical.png";
import javaScript from "../images/javascriptIcon.png";

const Service = () => {
  return (
    <div className="service parent-container" id="service-sec">
      <div className="sec2 sub-container">
        <a href="#header-sec" className="home-arrow">
          &#62;
        </a>
        <h4 className="heading4">|| My Services</h4>
        <h2 className="heading2">Services Offered to Clients</h2>
        <div className="sec2-row">
          <div className="sec2-col sec2-col1 top">
            <div className="sec2-logo-div">
              <img src={javaScript} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Expertise</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Frontend Development
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Full-Stack Development
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; MERN STACK
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Next.js + Grafbase Project
                Mgt
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Website Optimization &
                Efficiency
              </li>
            </ul>
            {/* <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Frontend Behavioral Support
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Adding functionality
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; bugs Fixation
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; API Integration
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; One Page Web App by React
              </li>
            </ul> */}
          </div>

          <div className="sec2-col sec2-col2 top">
            <div className="sec2-logo-div">
              <img src={technical} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Technical Support</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Frontend Technical Support
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Backend Technical Support
              </li>{" "}
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; MERN Stack + Next.js
                Support
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Deployment Management
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Maintaining Maintenance
              </li>
            </ul>
          </div>
          <div className="sec2-col sec2-col3 top">
            <div className="sec2-logo-div">
              <img src={Design} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Design Conversion</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Figma To HTML
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Design To Code
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; User Requirements to Code
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Fully Responsive Web
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; W3C Validated
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
