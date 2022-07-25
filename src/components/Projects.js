import bgeccomerce from "../images/bgeccommerce.jpg";
import bgbank from "../images/bgbank.jpg";
import eccommerce from "../images/maineccommerce.png";
import easybank from "../images/easybank.png";
import bgBlogr from "../images/bgblogr.jpg";
import blogr from "../images/blogr.jpg";
import bgPortfolio from "../images/bgportfolio.png";
import portfolio from "../images/portfolio.png";
import bgAgriculture from "../images/bgagriculture.png";
import agriculture from "../images/agriculture.png";
import { useRef } from "react";

const Projects = () => {
  const myRef = useRef(null);

  {
    var move = 1;
  }
  return (
    <div className="projects parent-container" id="project-sec">
      <div className="sec5 sub-container">
        <h4 className="heading4">|| My Projects</h4>
        <h2 className="heading2">My Complete Projects</h2>
        <div className="sec5-btn-div">
          <button
            className="sec5-btn sec5-left"
            onClick={() => {
              {
                if (window.innerWidth > 520) {
                  if (move <= 0) {
                    move += 420;
                  }
                } else {
                  if (move <= 0) {
                    move += 445;
                  }
                }

                myRef.current.style.transform = `translateX(${move}px`;
              }
            }}
          >
            &#60;&#60;
          </button>
          <button
            className="sec5-btn sec5-right"
            onClick={() => {
              {
                if (window.innerWidth > 520) {
                  if (move >= -1500) {
                    move += -420;
                  }
                } else {
                  if (move >= -1500) {
                    move += -445;
                  }
                }
                myRef.current.style.transform = `translateX(${move}px`;
              }
            }}
          >
            &#62;&#62;
          </button>
        </div>
        <div ref={myRef} className="sec5-row">
          <div className="sec5-col top sec5-col1">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">E-commerce Product Page</h3>
                <p className="sec5-para2">
                  This web is about the selling advertisement for "Sneakers".
                  The page has an awesome layout. There are a lot of
                  functionalities on this page that is included with beautiful
                  animations i.e lightbox, carousel, gallery-carousel, etc.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/EcommerceProductPage.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/EcommerceProductPage.github.io/tree/main"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img src={bgeccomerce} alt="img" className="sec5-bgImg" />
              <img src={eccommerce} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">E-commerce Product Page</h3>
          </div>
          <div className="sec5-col top sec5-col2">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">EasyBank</h3>
                <p className="sec5-para2">
                  This web contains good UI/UX effects. I created this web app
                  by using react.js. This was a challenge given by a frontend
                  mentor & I completed it successfully. The design is pure &
                  perfect.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/OwaisEasyBank.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/OwaisEasyBank.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img src={bgbank} alt="img" className="sec5-bgImg sec5-bgImg2" />
              <img src={easybank} alt="img" className="sec5-img sec5-img2" />
            </div>
            <h3 className="heading3 sec5-heading3">EasyBank</h3>
          </div>
          <div className="sec5-col top sec5-col3">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">Blogr Page</h3>
                <p className="sec5-para2">
                  This web is about blogging. It contains every basic info about
                  blogging. I created this by using only HTML5/CSS3/JavaScript.
                  This was a challenge given by a frontend mentor & I completed
                  it successfully. The design is pure & perfect.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/blogr-page.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/blogr-page.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img src={bgBlogr} alt="img" className="sec5-bgImg sec5-bgImg3" />
              <img src={blogr} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">Blogr Page</h3>
          </div>
          <div className="sec5-col top sec5-col4">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">First Portfolio</h3>
                <p className="sec5-para2">
                  This is my first portfolio web. Mostly my main focus on this
                  web was " How to create scrolling effect by using only
                  css3/JavaScript". The web is fully responsive for all devices
                  & W3C is validated with 0 errors & 0 warnings.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/OwaisPortfolio.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/OwaisPortfolio.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={bgPortfolio}
                alt="img"
                className="sec5-bgImg sec5-bgImg4"
              />
              <img src={portfolio} alt="img" className="sec5-img" />
            </div>
            <h3 className="heading3 sec5-heading3">First Portfolio</h3>
          </div>
          <div className="sec5-col top sec5-col5">
            <div className="project-div">
              <div className="project-info">
                <h3 className="sec5-heading3-2">Agriculture Company</h3>
                <p className="sec5-para2">
                  This web is about the advertisement for an agriculture
                  company. This was a project given by one of my Upwork client.
                  This web contains a lot of functionality which you will really
                  like.
                </p>
                <div className="project-links">
                  <a
                    href="https://programmerowais.github.io/agriculturecompany.github.io/"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site <span>&#62;</span>
                  </a>
                  <a
                    href="https://github.com/ProgrammerOwais/agriculturecompany.github.io"
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <span>&#62;</span>
                  </a>
                </div>
              </div>
              <img
                src={bgAgriculture}
                alt="img"
                className="sec5-bgImg sec5-bgImg5"
              />
              <img src={agriculture} alt="img" className="sec5-img sec5-img5" />
            </div>
            <h3 className="heading3 sec5-heading3">Agriculture Company</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
