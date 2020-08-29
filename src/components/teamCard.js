import React from 'react';
import {smartTrim} from '../helpers/commonHelpers';
import PopupModal from './popupModal';

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
                            {smartTrim(about, 160, " ", "...")}
                        </p>
                        <PopupModal title={name} content={about} img={image}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeamCard;
