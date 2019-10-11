import React, { Component } from 'react';
import EventsListItem from './EventsListItem';

export default class EventList extends Component {
    render() {
        const { events, selectEvent, deleteEvents } = this.props;

        return (
            <React.Fragment>
                {events.map(event => (
                    <EventsListItem
                        key={event.id}
                        event={event}
                        selectEvent={selectEvent}
                        deleteEvents={deleteEvents} />
                ))}
            </React.Fragment>
        )
    }
}
