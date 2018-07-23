import React, { Component } from "react";
import "./App.css";
import SearchRoute from "./components/routes/SearchRoute";

class App extends Component {
  render() {
    return <div className="app">{<SearchRoute />}</div>;
  }
}

export default App;
