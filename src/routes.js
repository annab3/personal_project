import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Portal from "./components/portal/portal";
import Admin from "./components/admin/Admin";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/services" component={Services} />
    <Route path="/Contact" component={Contact} />
    <Route path="/portal" component={Portal} />
    <Route path="/admin" component={Admin} />
    <Route exact path="/" component={Home} />
  </Switch>
);
