import React, { PureComponent } from "react";
//import PropTypes from "prop-types";

class DrinksEventsList extends PureComponent {
  render() {
    console.log("DRINKS EVENTS", this.props);
    const events = this.props.events.map(event => (
      <li key={event.location.name}>{event.location.name}</li>
    ));
    return <ul>{events}</ul>;
  }
}

export default DrinksEventsList;
