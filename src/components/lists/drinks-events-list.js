import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DrinksEventsList extends PureComponent {
  render() {
    const events = this.props.events.map(event => (
      <tr key={event.location.title}>
        <td>{event.location.name}</td>
        <td>{event.title}</td>
        <td>{new Date(event.time).toUTCString()}</td>
      </tr>
    ));
    return <table class="drinks-events-table">{events}</table>;
  }
}

export default DrinksEventsList;

DrinksEventsList.propTypes = {
  events: PropTypes.array
};
