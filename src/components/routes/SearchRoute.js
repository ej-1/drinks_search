import React, { Component } from "react";

import { getDrinksEvents } from "../../services/api";
import SearchField from "../forms/search-field";
import DrinksEventsList from "../lists/drinks-events-list";

class SearchRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { events: "", page: 1, pageSize: 10 }; // lift up hard coding
  }

  onSearchSubmit = searchTerm => {
    console.log("SearchRoute onSearchSubmit", searchTerm);

    getDrinksEvents(this.state.page, this.state.pageSize, searchTerm)
      .then(data => this.setState({ events: data }))
      .catch(reason => console.log(reason.message));
  };

  render() {
    return (
      <div className="search-route">
        {<SearchField onSearchSubmit={this.onSearchSubmit} />}
        {this.state.events && <DrinksEventsList events={this.state.events} />}
      </div>
    );
  }
}

export default SearchRoute;
