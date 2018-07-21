import React, { Component } from "react";
import "./App.css";
import SearchRoute from "./components/routes/SearchRoute";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">{<SearchRoute />}</div>;
  }
}

export default App;
