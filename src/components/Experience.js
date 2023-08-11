import download from "../images/download.png";
import myResume from "../Owais_frontend_Resume.pdf";

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
                I’m a professional Front end developer who has been working in
                the freelance field for over 2+ years. My expertise encompasses
                a wide array of tasks, including frontend coding, meticulous
                debugging, innovative design implementation, fostering robust
                connections between frontend and backend APIs, meticulous web
                optimization, and the formulation of SEO-driven content
                strategies.
              </p>
              <p className="para">
                Over the course of my journey, I have garnered invaluable
                skills, honing the art of negotiating and comprehending client
                requirements through effective, direct communication.
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
