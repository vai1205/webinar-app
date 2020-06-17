import React from 'react';

const EventCard = props => {
    const {details} = props;
    const {name,shortName,time,date,image} = details;
    return(
        <React.Fragment>
            <div className="col-sm-4 ec-container">
                <div className="ec-card" data-text={shortName}>
                    <div className="ec-imgBox">
                        <img src={image}/>
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
                        <a href="#">Enroll Now</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EventCard;