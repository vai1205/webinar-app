import React,{useEffect} from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import AboutSection from '../components/aboutSection';
import EventSection from '../components/eventSection';
import NewsSection from '../components/newsSection';
import FooterSection from '../components/footerSection';
import TeamSection from '../components/teamSection';
import { withRouter } from 'react-router-dom';

const Home = ({match}) => {
    useEffect(()=>{
        let selectedSectionElement = document.getElementById(match.params.section);
        selectedSectionElement && selectedSectionElement.scrollIntoView(); 
        if(match.path === '/'){
            window.scrollTo(0,0);
        }
    },[])
    return(
        <React.Fragment>
            <Navbar/>
            <section id="intro">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutSection/>
            </section>
            <section id="events">
                <EventSection/>
            </section>
            <section id="news">
                <NewsSection/>
            </section>
            <section id="team">
                <TeamSection/>
            </section>
            <FooterSection/>
        </React.Fragment>
    );
};

export default withRouter(Home);