import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";

class EventDashboard extends Component {
  showForm = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  deleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.deleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  state => ({ events: state.events }),
  {
    deleteEvent
  }
)(EventDashboard);
