import "./App.css";
import { AboutMe } from "./assets/components/aboutMe/AboutMe";
import { Index } from "./assets/components/index/Index";
import { NavBar } from "./assets/components/navbar/NavBar";
import { AllProjects } from "./assets/components/projects/projects";

function App() {
  return (
    <div className="App">
      {" "}
      <NavBar />
      <body className="App-body">
        <div className="wrapper">
          <Index />
          <AboutMe />
          <AllProjects />
        </div>
      </body>
    </div>
  );
}

export default App;
