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
        <h2 className="heading2">Service Provide For My Clients.</h2>
        <div className="sec2-row">
          <div className="sec2-col sec2-col1 top">
            <div className="sec2-logo-div">
              <img src={Design} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Design To HTML</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Figma To HTML
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; PSD To HTML
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; XD To HTML
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Fully Responsive
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; W3C Validated
              </li>
            </ul>
          </div>
          <div className="sec2-col sec2-col2 top">
            <div className="sec2-logo-div">
              <img src={technical} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">Technical Support</h3>
            <ul className="sec2-list">
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; HTML5/CSS3 Support
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Making Errors Correction
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Support in Frontend
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Updates Frontend
              </li>
              <li className="sec2-items">
                <span>&#62;&#62; </span>&nbsp;&nbsp; Meets The Client
                Expectations
              </li>
            </ul>
          </div>
          <div className="sec2-col sec2-col3 top">
            <div className="sec2-logo-div">
              <img src={javaScript} alt="logo" className="sec2-logo" />
            </div>
            <h3 className="heading3 sec2-heading3">JavaScript Support</h3>
            <ul className="sec2-list">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
