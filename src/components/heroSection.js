import React from 'react';
import heroImage from '../resources/images/heroImage.jpg'

const HeroSection = props => {
    return(
        <React.Fragment>
        <div className="intro-section" id="home-section">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-4 mr-auto">
                    <h1>Cardio Web India</h1>
                    <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quo deleniti quidem minima autem ea minus saepe assumenda? Animi quis sed porro numquam, perspiciatis natus iure consequuntur voluptates! Beatae, sequi!</p>
                    <p><a href="#events" className="button py-3 px-5"><span>EVENTS</span></a></p>
                </div>
                <div className="col-lg-2 ml-auto"  data-aos="fade-up" data-aos-delay="100">
                    <figure className="img-absolute">
                    <img src={heroImage} alt="Image" className="img-fluid themeShadow"/>
                    </figure>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default HeroSection;