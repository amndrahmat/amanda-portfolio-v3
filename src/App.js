import React from "react";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MySkills from "./components/pages/MySkills";
import MyProjects from "./components/pages/MyProjects";
import Achievement from "./components/pages/Achievement";
import Certification from "./components/pages/Certification";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/achievement" component={Achievement} />
          <Route path="/myskills" component={MySkills} />
          <Route path="/myprojects" component={MyProjects} />
          <Route path="/certification" component={Certification} />
        </Switch>
        <Footer />
        <div className="social">
          <a
            href="https://www.instagram.com/amndrahmat/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amandarahmath/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/amndrahmat"
            target="_blank"
            aria-label="Github"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Router>
    </>
  );
}

export default App;
