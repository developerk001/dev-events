import React, { Component } from "react";

import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/event/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <EventDashboard/>
      </div>
    );
  }
}

export default App;
