import download from "../images/download.png";
import myResume from "../myresume.pdf";

const Experience = () => {
  return (
    <div className="experience parent-container">
      <div className="sec4 sub-container">
        <h4 className="heading4">|| My Experience</h4>
        <h2 className="heading2">My Work Experience</h2>
        <div className="sec4-row">
          <div className="sec4-col1">
            <div className="para-div">
              <p className="para">
                I have worked on Upwork as a freelance front-end developer for
                about a year plus & helped a lot of clients of creating a modern
                beautiful looking websites & helping them with coding mostly
                related to javascript.
              </p>
              <p className="para">
                During those days, I learned & gained a lot of experience in
                skills like how to negotiate & understand the needs of clients
                with having point-to-point effective communications.
              </p>
            </div>
            <div className="resume-div sec4-resume">
              <a href={myResume} download="my resume">
                <div className="resume-bg"></div>
                <button className="resumeBtn">
                  <span>Get Resume</span>
                  <span>
                    <img
                      src={download}
                      alt="download"
                      className="download-icon"
                    />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec4-col2">
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Communication</h4>
              <div className="progress  top">
                <span className="progress-value ">85%</span>
              </div>
            </div>
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Availability</h4>
              <div className="progress top">
                <span className="progress-value">95%</span>
              </div>
            </div>
            <div className="progress-div">
              <h4 className="heading4 sec4-heading4">Flexibility</h4>
              <div className="progress top">
                <span className="progress-value">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
