import About from "./Components/Aboutus/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Exp from "./Components/Experience/Exp";
import Navbar from "./Components/Navbar/Navbar";
import Responsive from "./Components/Navbar/Responsive";
import Project from "./Components/Projects/Project";
import Skill from "./Components/Skills/Skill";


function App() {
  return (
   <>
   
   <Navbar/>
   <Responsive/>
  <About/>
  <Skill/>
  <Exp/>
  <Project/>
  <Education/>
  <Contact/>
   </>
  );
}

export default App;
