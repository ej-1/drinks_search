import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "../lists/drinks-events-list.css";

class DrinksEventsList extends PureComponent {
  render() {
    const events = this.props.events.map(event => (
      <tr key={event.location.title}>
        <td>{event.location.name}</td>
        <td>{event.title}</td>
        <td>{new Date(event.time).toUTCString()}</td>
        <td>
          <a
            target="_blank"
            href={`http://www.google.com/maps/place/${
              event.location.latitude
            },${event.location.longitude}`}
          >
            See location
          </a>
        </td>
      </tr>
    ));
    return <table class="drinks-events-table">{events}</table>;
  }
}

export default DrinksEventsList;

DrinksEventsList.propTypes = {
  events: PropTypes.array
};
