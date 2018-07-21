import React, { Component } from "react";
import "./App.css";
import SearchRoute from "./components/routes/SearchRoute";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search drink events</h1>
        </header>
        {<SearchRoute />}
      </div>
    );
  }
}

export default App;
