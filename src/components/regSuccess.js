import React from 'react'
import { withRouter } from 'react-router-dom'
import BackBtn from '../components/backBtn'
const RegSuccess = props => {
    return (
        <div className="reg-success-page">
            <BackBtn backPath="event" />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 congratulations">
                        <h2 className="mb-3">Congratulations!</h2>
                        <h4>You are successfully registered! Please check your email for event details.</h4>
                        <div className="button mt-3" onClick={e => { e.preventDefault(); props.history.push("/") }}>Return Home</div>
                    </div>
                    <div className="col-md-8">
                        <img className="pt-5 success-img" src="registered.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RegSuccess);
