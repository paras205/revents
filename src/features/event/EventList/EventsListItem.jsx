import React, { Component } from 'react';
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendes from './EventListAttendes';

export default class EventsListItem extends Component {
    render() {
        const { event, selectEvent, deleteEvents } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header>{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date} |
                     <Icon name="marker" /> {event.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map(attendee => (
                            <EventListAttendes key={attendee.id} attendee={attendee} />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>
                    <Button onClick={() => deleteEvents(event.id)}
                        as="a" color="red" floated="right" content="Delete "
                    />
                    <Button onClick={() => selectEvent(event)}
                        as="a" color="teal" floated="right" content="View"
                    />
                </Segment>
            </Segment.Group>
        )
    }
}
