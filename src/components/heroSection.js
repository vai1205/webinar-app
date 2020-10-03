import React from 'react';
import { withRouter } from 'react-router-dom';
import heroImage from '../resources/images/heroImage.jpg';

const HeroSection = props => {
    return (
        <React.Fragment>
            <div className="intro-section" id="home-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mr-auto">
                            <h1>Cardio Web India</h1>
                            <p className="mb-5">Cardio Web India is the professional body for cardiologists and those working in the area of cardiology including researchers, scientists, cardiovascular.Our Focus is to Attain advanced in scientific knowledge and research in the field of cardiovascular systems in all aspects and to improve basic understanding to find better preventive measures and treatment of all types of Cardio Vascular Disease.</p>
                            {/* <p><a href="#events" className="button py-3 px-5"><span>EVENTS</span></a></p> */}
                            <p><a onClick={e=>{e.preventDefault();props.history.push("event")}} className="button py-3 px-5"><span>UPCOMING EVENT</span></a></p>
                        </div>
                        <div className="col-lg-2 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <figure className="img-absolute">
                                <img src={heroImage} alt="Image" className="img-fluid themeShadow" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(HeroSection);