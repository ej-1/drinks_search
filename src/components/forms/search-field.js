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
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            name="search"
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchField;
