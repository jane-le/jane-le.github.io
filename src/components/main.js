import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;