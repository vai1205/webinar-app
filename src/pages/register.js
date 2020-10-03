import React from 'react';
import { TextField } from '@material-ui/core';
import BackBtn from '../components/backBtn';
const Register = props => {
    return (
        <div className="register-page pb-5">
            <BackBtn backPath="event-schedule" />
            <div className="container">
                <div className="heading mb-5">
                    <h1 className="pt-5">ECHO-DELHI MIDTERM <span>Virtual 2020</span></h1>
                    <h5>Sunday, October 11th, 2020 3.00-9.00 pm </h5>
                </div>
                <div className="row registration">
                    <div className="col-md-4">
                        <h2>Register Here to Attend</h2>
                        <form className="reg-form mt-3 mb-5">
                            <div className="mb-3">
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Name" />
                                <br />
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Qualification" />
                                <br />
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Affiliation" />
                                <br />
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Designation" />
                                <br />
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Mobile Number" />
                                <br />
                                <TextField className="mb-2" id="standard-basic" color="secondary" required label="Email" />
                            </div>
                            <div className="button mt-3">Get Enrolled</div>
                        </form>
                    </div>
                    <div className="col-md-6 img-container">
                        <img src="register.png" />
                    </div>
                    <div className="col-md-2" style={{alignSelf:"flex-end"}}>
                        <div className="contact">
                            <h4 className="mb-3">Facing Issues? <span>Contact us</span></h4>
                            <h5><a href="tel:+91-9999757744">+91-9999757744</a></h5>
                            <h5>Apex Society of CME in Cardiology, A-51, Hauz Khas, New Delhi,110016</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright mt-3">Organised by: Cardio Web India</div>
        </div>
    )
}
export default Register;