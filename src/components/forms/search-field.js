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
          type="text"
          value={this.state.value}
          name="search"
          onChange={this.handleChange}
        />
        <input class="submit-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchField;
