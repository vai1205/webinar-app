import React from 'react';

const TeamCard = props => {
    const {data} = props;
    const {name, about, image} = data;

    return(
        <React.Fragment>
            <div className="t-container col-sm-4">
                <div className="t-card">
                    <div className="t-imgBox">
                        <img src={image} />
                    </div>
                    <div className="t-content">
                        <h2 className="t-heading">
                            {name}
                        </h2>
                        <p>
                            {about}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeamCard;
