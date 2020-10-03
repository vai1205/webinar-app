import React from 'react';
import TeamCard from './teamCard';
import {teamData} from '../resources/teamData'

const TeamSection = props => {
    return (
        <React.Fragment>
            <div className="container t-section">
                <h5 className="t-main-subheading text-center">Founder Members</h5>
                <h3 className="t-main-heading text-center">We take initiatives!</h3>
                <div className="row" style={{justifyContent:"center",alignItems:"center"}} >
                    {
                        teamData.map((t,i)=>{
                            if(t.isFounder){
                                return <TeamCard key={i} data={t} />
                            }
                        })
                    }
                </div>
            </div>
            <div className="container t-section">
                <h5 className="t-main-subheading text-center">Board of Advisors</h5>
                <h3 className="t-main-heading text-center">Together we make it Possible!</h3>
                <div className="row">
                    {
                        teamData.map((t,i)=>{
                            if(!t.isFounder){
                                return <TeamCard key={i} data={t} />
                            }
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeamSection;
