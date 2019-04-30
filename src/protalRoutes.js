import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientProfile from "./components/clientProfile/ClientProfile";
import Reservations from "./components/Reservations/Reservations";

export default (
  <Switch>
    <Route path="/portal/reservations" component={Reservations} />
    <Route path="/portal/profile" component={ClientProfile} />
  </Switch>
);
