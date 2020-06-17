import React from 'react';
import EventCard from './eventCard';
import { eventData } from '../resources/eventData';

const EventSection = props => {
    return (
        <React.Fragment>
            <div className="e-section">
                <h2 className="e-Subheading">Upcoming Events</h2>
                <h3 className="e-heading">Enroll now to get the most!</h3>
                <div className="container">
                    <div className="row">
                        {eventData.map((e, i) =>
                            <EventCard key={i} details={e} />
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EventSection;