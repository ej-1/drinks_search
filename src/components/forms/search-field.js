import React, { Component } from "react";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form
        id="search-form"
        class="search-form"
        name="search-form"
        onSubmit={e => {
          e.preventDefault();
          this.props.onSearchSubmit(this.state.value);
        }}
      >
        <input
          class="search-input"
          type="text"
          name="search"
          placeholder="Radisson"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input class="submit-button" type="submit" value="Search events" />
      </form>
    );
  }
}

export default SearchField;
