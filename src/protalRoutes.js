import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientProfile from "./components/ClientProfile";
import Reservations from "./components/Reservations";
import History from "./components/History";
import RegisterDog from "./components/RegisterDog";
import MakeRes from "./components/MakeRes";
import Welcome from "./components/Welcome";

export default (
  <Switch>
    <Route path="/portal/reservations" component={Reservations} />
    <Route path="/portal/profile" component={ClientProfile} />
    <Route path="/portal/history" component={History} />
    <Route path="/portal/add_dog" component={RegisterDog} />
    <Route path="/portal/make_reservation" component={MakeRes} />
    <Route path="/portal" component={Welcome} />
  </Switch>
);
