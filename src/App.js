import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./store";
import "./App.css";
import routes from "./routes";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <div>{routes}</div>
      </HashRouter>
    </Provider>
  );
}

export default App;
