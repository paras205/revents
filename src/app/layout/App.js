import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/navbar/Navbar';
import { Container } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </React.Fragment>
    )
  }
}

