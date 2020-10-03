import React from 'react';
import { withRouter } from 'react-router-dom';

const EventCard = props => {
    const { details, history } = props;
    const { name, shortName, time, date, image } = details;
    const openEvents = e => {
        e.preventDefault();
        history.push("event");
    }
    return (
        <React.Fragment>
            <div className="col-sm-4 ec-container">
                <div className="ec-card" data-text={shortName}>
                    <div className="ec-imgBox">
                        <img src={image} />
                    </div>
                    <div className="ec-contentBox">
                        <h2>{name}</h2>
                        <div className="ec-details">
                            <h3>Time</h3>
                            <span>{time}</span>
                        </div>
                        <div className="ec-details">
                            <h3>Date</h3>
                            <span>{date}</span>
                        </div>
                        <button onClick={openEvents}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(EventCard);