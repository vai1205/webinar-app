import React from 'react';

const Counter = props => {
    const {count, label, icon} = props
    return(
        <React.Fragment>
            <div className="col">
                <div className="counter mb-5">
                    <div className="icon-wrap">
                        <img className="icon mb-3" src={icon}/>
                    </div>
                    <div className="counter-text">
                    <strong>{count}</strong>
                    <span>{label}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;