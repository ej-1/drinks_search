import React, { Component } from "react";
//import PropTypes from "prop-types";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.state.onSearchSubmit = this.props.onSearchSubmit;
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form
        id="search-form"
        name="search-form"
        onSubmit={e => {
          e.preventDefault();
          this.state.onSearchSubmit(this.state.value);
        }}
      >
        <input
          class="search-input"
          type="text"
          value={this.state.value}
          name="search"
          placeholder="Radisson"
          onChange={this.handleChange}
        />
        <input class="submit-button" type="submit" value="Search events" />
      </form>
    );
  }
}

export default SearchField;
