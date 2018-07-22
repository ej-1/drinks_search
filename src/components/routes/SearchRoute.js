import React, { Component } from "react";

import { getDrinksEvents } from "../../services/api";
import SearchField from "../forms/search-field";
import DrinksEventsList from "../lists/drinks-events-list";
import { API_DEFAULT_DATA } from "../../services/api-call-config";

class SearchRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { events: "" };
  }

  onSearchSubmit = searchTerm => {
    getDrinksEvents(
      API_DEFAULT_DATA.page,
      API_DEFAULT_DATA.pageSize,
      searchTerm
    )
      .then(data => this.setState({ events: data }))
      .catch(error => console.log(error.message));
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
