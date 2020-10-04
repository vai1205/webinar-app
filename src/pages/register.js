import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import BackBtn from '../components/backBtn';
import RegSuccess from '../components/regSuccess';
import Loader from '../components/loader';
const Register = props => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        const name = document.getElementById("name").value;
        const qualification = document.getElementById("qualification").value;
        const affiliation = document.getElementById("affiliation").value;
        const designation = document.getElementById("designation").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const reqString = `https://stormy-caverns-68052.herokuapp.com/api/contact?name=${name}&email=${email}&phone=${phone}&qualification=${qualification}&affiliation=${affiliation}&designation=${designation}`
        fetch(reqString, {
            method: 'POST',
            mode: 'no-cors'
        }).then(res => {
            setLoading(false)
            setSuccess(true)
        })
    }
    return (
        <React.Fragment>
            {
                success ?
                    <RegSuccess />
                    :
                    <React.Fragment>
                        {
                            loading ? <Loader/>
                                : <div className="register-page pb-5">
                                    <BackBtn backPath="event-schedule" />
                                    <div className="container">
                                        <div className="heading mb-5">
                                            <h1 className="pt-5">ECHO-DELHI MIDTERM <span>Virtual 2020</span></h1>
                                            <h5>Sunday, October 11th, 2020 3:00pm - 9:00 pm </h5>
                                        </div>
                                        <div className="row registration">
                                            <div className="col-md-4">
                                                <h2>Register Here to Attend</h2>
                                                <form className="reg-form mt-3 mb-5" onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <TextField className="mb-2" id="name" color="secondary" required label="Name" />
                                                        <br />
                                                        <TextField className="mb-2" id="qualification" color="secondary" required label="Qualification" />
                                                        <br />
                                                        <TextField className="mb-2" id="affiliation" color="secondary" required label="Affiliation" />
                                                        <br />
                                                        <TextField className="mb-2" id="designation" color="secondary" required label="Designation" />
                                                        <br />
                                                        <TextField className="mb-2" id="phone" color="secondary" type="number" required label="Mobile Number" />
                                                        <br />
                                                        <TextField className="mb-2" id="email" type="email" color="secondary" required label="Email" />
                                                    </div>
                                                    <button className="button mt-3">Get Enrolled</button>
                                                </form>
                                            </div>
                                            <div className="col-md-6 img-container">
                                                <img src="register.png" />
                                            </div>
                                            <div className="col-md-2" style={{ alignSelf: "flex-end" }}>
                                                <div className="contact">
                                                    <h4 className="mb-3">Facing Issues? <span>Contact us</span></h4>
                                                    <h5><a href="tel:+91-9999757744">+91-9999757744</a></h5>
                                                    <h5>Apex Society of CME in Cardiology, A-51, Hauz Khas, New Delhi,110016</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copyright mt-3">Organised by: Cardio Web India || Powered by: MdeRx Healthcare Systems</div>
                                </div>
                        }
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
export default Register;