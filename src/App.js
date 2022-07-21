import Header from "./components/Header";
import Mainsec from "./components/Mainsec";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="parent">
      <Header></Header>
      <main>
        <Mainsec></Mainsec>
        <Service></Service>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Work></Work>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      {window.addEventListener("scroll", () => {
        var scrolling1 = document.querySelectorAll(".top"); // Access those elements which you wanna scroll
        var scrolling2 = []; // declare other variables as an array in order to get every element height from top

        for (let i = 0; i < scrolling1.length; i++) {
          // run below coding for every scrolling element
          scrolling2[i] = scrolling1[i].getBoundingClientRect().top; // get the height of every scroll element from top
          if (scrolling2[i] <= window.innerHeight * 0.75) {
            scrolling1[i].classList.add("topShow"); // At 3/4 or 75% from the top adding following classes to
          }
        }
      })}
    </div>
  );
}

export default App;
