import React from 'react';
import TeamCard from './teamCard';
import {teamData} from '../resources/teamData'

const TeamSection = props => {
    return (
        <React.Fragment>
            <div className="container t-section">
                <h5 className="t-main-subheading text-center">Board of Directors</h5>
                <h4 className="t-main-heading text-center">Together we make it Possible!</h4>
                <div className="row">
                    {
                        teamData.map((t,i)=>{
                            return <TeamCard key={i} data={t} />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeamSection;
