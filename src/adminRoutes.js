import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Assign from "./components/Assign";
import EditReservation from "./components/EditReservation";

export default (
  <Switch>
    <Route path="/admin/assign/:index" component={Assign} />
    <Route path="/admin/edit/:id" component={EditReservation} />
    <Route path="/admin" component={Admin} />
  </Switch>
);
