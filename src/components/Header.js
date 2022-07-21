import logo from "../images/logo.png";
/************************************************************ Hamburger coding ******************************************* */
// {
//   let hamburger = document.querySelector(".header-col-2");
//   let hamburgerMenu = document.querySelector(".hamburger");

//   hamburgerMenu.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//   });
// }

const header = () => {
  return (
    <header className="parent-container" id="header-sec">
      <div className="header-div sub-container">
        <div className="header-col1">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="header-col2">
          <div
            className="hamburger"
            onClick={() => {
              document.querySelector(".nav").classList.toggle("active");
              document.querySelector("main").classList.toggle("active");
            }}
          >
            <div className="hamburger-menu"></div>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-items hide-items">
                <button
                  className="hide-btn"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  X
                </button>
              </li>
              <li className="nav-items">
                <a
                  href="#home-sec"
                  className="items-link"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#service-sec"
                  className="items-link"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  Services
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#skill-sec"
                  className="items-link"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#project-sec"
                  className="items-link"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-items">
                <a
                  href="#contact-sec"
                  className="items-link"
                  onClick={() => {
                    document.querySelector(".nav").classList.toggle("active");
                    document.querySelector("main").classList.toggle("active");
                  }}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          {/* <div className="social-icons-div"></div> */}
        </div>
        <div className="header-col3">
          {" "}
          <a href="#contact-sec">
            <div className="header-btn-div">
              <div className="btn-bg"></div>
              <div className="header-btn" href="www.google.com">
                Hire me
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
