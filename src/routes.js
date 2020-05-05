import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import Resume from "./views/resume/Resume";

export default (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );