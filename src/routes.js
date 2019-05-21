import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portal from "./components/Portal";
import AdminPortal from "./components/AdminPortal";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/services" component={Services} />
    <Route path="/Contact" component={Contact} />
    <Route path="/portal" component={Portal} />
    <Route path="/admin" component={AdminPortal} />
    <Route exact path="/" component={Home} />
  </Switch>
);
