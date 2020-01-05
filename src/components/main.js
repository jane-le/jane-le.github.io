import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing-page";
import About from "./about-me";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/jane-le.github.io/" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
export default Main;
