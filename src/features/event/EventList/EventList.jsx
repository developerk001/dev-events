import React, { Component } from "react";

import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, editEvent, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItem
            key={event.id}
            deleteEvent={deleteEvent}
            editEvent={editEvent}
            event={event}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
