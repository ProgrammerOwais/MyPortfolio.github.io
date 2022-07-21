import upwork from "../images/upwork.png";
import upworkIcon from "../images/upworkIcon.png";
import mentor from "../images/mentor.png";
import mentorIcon from "../images/mentorIcon.png";
import codewar from "../images/codewar.png";
import codewarIcon from "../images/codewarIcon.png";

const Work = () => {
  return (
    <div className="work parent-container">
      <div className="sec6 sub-container">
        <h4 className="heading4 sec6-heading4">|| My Work</h4>
        <h2 className="heading2 sec6-heading2">Platforms I Still Use.</h2>
        <div className="sec6-parent-row">
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={upwork} alt="img" className="sec6-img" />
              <img src={upworkIcon} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">Upwork</h4>
              <h5 className="para2 sec6-para2">Freelance Platform</h5>
              <p className="para2 sec6-para">
                UUpwork is the world's work marketplace. It connects businesses
                with independent professionals & agencies around the world. I
                work here as a front-end web developer.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.upwork.com/freelancers/~01262760af5540afa4?viewMode=1"
              >
                <button className="sec6-btn">
                  View Profile <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={mentor} alt="img" className="sec6-img" />
              <img src={mentorIcon} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">Frontend Mentor</h4>
              <h5 className="para2 sec6-para2">Developer Platform</h5>
              <p className="para2 sec6-para">
                This platform helps you to improve your frontend skills by
                building real projects. They give you professional designs &
                you’ll have to convert them into HTML. I level up my frontend
                skills here.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.frontendmentor.io/profile/ProgrammerOwais"
              >
                <button className="sec6-btn">
                  View Profile <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
          <div className="sec6-row top">
            <div className="sec6-col sec6-col1">
              <img src={codewar} alt="img" className="sec6-img" />
              <img src={codewarIcon} alt="img" className="sec6-img-icon" />
            </div>
            <div className="sec6-col sec6-col2">
              <h4 className="heading4 sec6-heading4-2">Codewars</h4>
              <h5 className="para2 sec6-para2">Programmers Platform</h5>
              <p className="para2 sec6-para">
                The world's most advanced coding assessment platform for
                organizations looking to scale their hiring, upskilling, and
                certification programs. I did gain a lot of problem-solving
                experience here.
              </p>
            </div>
            <div className="sec6-col sec6-col3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codewars.com/users/ProgrammerOwais"
              >
                <button className="sec6-btn">
                  View Profile <span>&#62;&#62;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
