import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./store";
import "./App.scss";
import routes from "./routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar />
        <div className="main">{routes}</div>
      </HashRouter>
    </Provider>
  );
}

export default App;
