import React, { PureComponent } from "react";
//import PropTypes from "prop-types";

class DrinksEventsList extends PureComponent {
  render() {
    console.log("DRINKS EVENTS", this.props);
    const events = this.props.events.map(event => (
      <tr key={event.location.name}>
        <td>{event.location.name}</td>
        <td>{event.title}</td>
        <td>{new Date(event.time).toUTCString()}</td>
        {/* MOVE THE toUTCString up*/}
      </tr>
    ));
    return <table class="drinks-events-table">{events}</table>;
  }
}

export default DrinksEventsList;
