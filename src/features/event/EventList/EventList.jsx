import React, { Component } from 'react';
import EventsListItem from './EventsListItem';

export default class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.events.map(event => (
                    <EventsListItem key={event.id} event={event} />
                ))}
            </React.Fragment>
        )
    }
}
