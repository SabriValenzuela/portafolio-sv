import "./App.css";
import { AboutMe } from "./assets/components/aboutMe/AboutMe";
import ContactMe from "./assets/components/contact/ContactMe";
import { Index } from "./assets/components/index/Index";
import { NavBar } from "./assets/components/navbar/NavBar";
import { AllProjects } from "./assets/components/projects/Projects";

function App() {
  return (
    <div className="App">
      {" "}
      <NavBar />
      <body className="App-body">
        <div className="wrapper">
          <Index />

          <AllProjects />
          <AboutMe />
          <ContactMe />
        </div>
      </body>
    </div>
  );
}

export default App;
