import html from "../images/html5.png";
import css3 from "../images/css3.png";
import js from "../images/js.png";
import reactlogo from "../images/reactlogo.png";
import bootstrap from "../images/bootstrap.png";
import gsap from "../images/gsap.png";
import api from "../images/api.png";
import firebase from "../images/firebase.png";
import sass from "../images/sass.png";
import jquery from "../images/jquery.png";
import github from "../images/github.png";
import git from "../images/git.png";
import figma from "../images/figma.png";
import cplus from "../images/cplus.png";
import python from "../images/python.png";
import { useRef } from "react";

const Skills = () => {
  const myRef = useRef(null);
  var move = 1;
  return (
    <div className="skills parent-container" id="skill-sec">
      <div className="sec3 sub-container">
        <h4 className="heading4">|| My Skills</h4>
        <h2 className="heading2">Skills I Use In Web Development.</h2>
        <div className="sec5-btn-div sec3-btn-div">
          <button
            className="sec5-btn sec5-left"
            onClick={() => {
              {
                if (move <= 0) {
                  move += 250;
                }

                myRef.current.style.transform = `translateX(${move}px)`;
              }
            }}
          >
            &#60;&#60;
          </button>
          <button
            className="sec5-btn sec5-right"
            onClick={() => {
              {
                if (move >= -3300) {
                  move += -250;
                }

                myRef.current.style.transform = `translateX(${move}px)`;
              }
            }}
          >
            &#62;&#62;
          </button>
        </div>
        <div ref={myRef} className="sec3-row">
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">HTML5</h3>
            <div className="skill-img-div">
              <img src={html} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">CSS3</h3>
            <div className="skill-img-div">
              <img src={css3} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">JavaScript</h3>
            <div className="skill-img-div">
              <img src={js} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">React.js</h3>
            <div className="skill-img-div">
              <img src={reactlogo} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Bootstrap5</h3>
            <div className="skill-img-div">
              <img src={bootstrap} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Gsap.js</h3>
            <div className="skill-img-div">
              <img src={gsap} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">API</h3>
            <div className="skill-img-div">
              <img src={api} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Firebase</h3>
            <div className="skill-img-div">
              <img src={firebase} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Sass</h3>
            <div className="skill-img-div">
              <img src={sass} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">JQuery</h3>
            <div className="skill-img-div">
              <img src={jquery} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Github</h3>
            <div className="skill-img-div">
              <img src={github} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Git</h3>
            <div className="skill-img-div">
              <img src={git} alt="icon" className="sec3-img" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Figma</h3>
            <div className="skill-img-div">
              <img src={figma} alt="icon" className="sec3-img figma" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">C++</h3>
            <div className="skill-img-div">
              <img src={cplus} alt="icon" className="sec3-img cplus" />
            </div>
          </div>
          <div className="skill-div">
            <h3 className="heading3 sec3-heading3">Python</h3>
            <div className="skill-img-div">
              <img src={python} alt="icon" className="sec3-img python" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
