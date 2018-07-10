import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/event/nav/NavBar/NavBar";

// TODO: Checkout Interactive Playground && Playaround with setting specific

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
