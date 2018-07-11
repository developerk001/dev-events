import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: events,
    selectedEvent: null,
    isOpen: false
  };

  showForm = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      isOpen: false
    });
  };

  editEvent = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  updateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id)
          return Object.assign({}, updatedEvent);
        return event;
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  deleteEvent = eventId => () => {
    this.setState({
      events: this.state.events.filter(event => (event.id !== eventId))
    });
  };

  addEvent = event => {
    console.log(this.state.events.length);
    event.id = this.state.events.length + 1;
    event.hostPhotoURL = "/public/assets/user.png";
    this.setState({
      events: [...this.state.events, event],
      isOpen: false
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.deleteEvent} editEvent={this.editEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.showForm} positive content="Create Event" />
          {this.state.isOpen && (
            <EventForm
              selectedEvent={selectedEvent}
              addEvent={this.addEvent}
              closeForm={this.closeForm}
              updateEvent={this.updateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
