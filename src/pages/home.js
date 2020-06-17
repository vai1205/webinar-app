import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import About from '../components/aboutSection';
import AboutSection from '../components/aboutSection';
import EventSection from '../components/eventSection';

const Home = props => {
    return(
        <React.Fragment>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <EventSection/>
        </React.Fragment>
    );
};

export default Home;