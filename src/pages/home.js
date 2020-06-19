import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import About from '../components/aboutSection';
import AboutSection from '../components/aboutSection';
import EventSection from '../components/eventSection';
import NewsSection from '../components/newsSection';
import FooterSection from '../components/footerSection';
import TeamSection from '../components/teamSection';

const Home = props => {
    return(
        <React.Fragment>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <EventSection/>
            <NewsSection/>
            <TeamSection/>
            <FooterSection/>
        </React.Fragment>
    );
};

export default Home;