import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Assign from "./components/admin/Assign";

export default (
  <Switch>
    <Route path="/admin/assign/:index" component={Assign} />
    <Route path="/admin" component={Admin} />
  </Switch>
);
