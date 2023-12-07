import "./App.css";
import MajorProjects from "./components/MajorProjects";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import MinorProjects from "./components/MinorProjects";
import AboveFooter from "./components/AboveFooter";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)" }}
      className="leading-normal tracking-normal text-white gradient"
    >
      <Navbar />
      <Intro />
      <AboutMe />
      <MajorProjects />
      <Skills />
      <MinorProjects />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default App;
