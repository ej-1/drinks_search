import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDrinksEvents } from "./services/api";
import SearchField from "./components/forms/search-field";

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { events: getDrinksEvents(1, 10, "radisson") };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {<SearchField getDrinksEvents={getDrinksEvents} />}
      </div>
    );
  }
}

export default App;
