import React from 'react';
import { withRouter } from 'react-router-dom';
const BackBtn = props => {
    const {backPath} = props;
    return(
        <div className="back" onClick={e => { e.preventDefault(); props.history.push(backPath) }}></div>
    )
}
export default withRouter(BackBtn);