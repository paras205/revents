import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/navbar/Navbar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import Homepage from '../../features/home/Homepage';
import EventDetails from '../../features/event/EventDetails/EventDetails';
import PeopleDashboard from '../../features/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/UserDetailed/UserDetailed';
import SettingDashboard from '../../features/settings/SettingDashboard';
import EventForm from '../../features/event/EventForm/EventForm';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route path="/(.+)" render={() => (
          <React.Fragment>
            <Navbar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetails} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailed} />
              <Route path="/settings" component={SettingDashboard} />
              <Route path="/create" component={EventForm} />
            </Container>
          </React.Fragment>
        )}
        >
        </Route>
      </React.Fragment>

    )
  }
}

