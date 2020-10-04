import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const NavButton = ({match, history}) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        if(isOpen){
            let nav = document.getElementById("navButton__nav");
            nav.classList.add("navButton__nav__transform");
            setTimeout(()=>{
                nav.classList.remove("navButton__nav__transform");
            },100)
        }
    },[isOpen])
    const handleTogglerClick = e => {
        e.preventDefault();
        let backgroundClassList = document.getElementById("navButton__background").classList;
        if (backgroundClassList.contains("navButton__clicked")) {
            backgroundClassList.remove("navButton__clicked");
        } else {
            backgroundClassList.add("navButton__clicked");
        }
        setTimeout(()=>{
            setIsOpen(!isOpen)
        })
    };
    const handleRedirect = route => e => {
        e.preventDefault();
        if(route !== match.path){
            if(route==='/signin' && match.path !== '/signin'){
                history.push(route);
            } else {
                if (match.path === '/' || match.path === "/home/:section?" || match.path === '*'){
                    let selectedSectionId = route.replace(/\//g,"")
                    let selectedSectionElement = document.getElementById(selectedSectionId);
                    selectedSectionElement && selectedSectionElement.scrollIntoView();
                } else{
                    history.push(`home/${route.replace(/\//g,"")}`);
                }
            }
        }
        document.getElementById("navButton__background").classList.remove("navButton__clicked");
        setIsOpen(false);
    }
    return(
        <div className="navButton">
            <div 
                type="checkbox" 
                className={`navButton__checkbox ${isOpen && `navButton__checkbox__checked`}`} 
                id="navi-toggle"
            />
            <label for="navi-toggle" className="navButton__button" onClick={handleTogglerClick}>
                <span className="navButton__icon">&nbsp;</span>
            </label>
            <div id="navButton__background" className="navButton__background">&nbsp;</div>
            {
                isOpen &&
                <React.Fragment>
                    <nav id="navButton__nav" className="navButton__nav">
                        <ul className="navButton__list">
                            <li data-text="Home" className="navButton__item" onClick={handleRedirect("/intro")}>
                                <div className="navButton__link">Home</div>
                            </li>
                            <li data-text="About Us" className="navButton__item" onClick={handleRedirect("/about")}>
                                <div className="navButton__link">About Us</div>
                            </li>
                            <li data-text="Events" className="navButton__item" onClick={handleRedirect("/events")}>
                                <div className="navButton__link">Events</div>
                            </li>
                            <li data-text="News" className="navButton__item" onClick={handleRedirect("/news")}>
                                <div className="navButton__link">News</div>
                            </li>
                            {/* <li data-text="Signin" className="navButton__item" onClick={handleRedirect("/signin")}>
                                <div className="navButton__link">Sign In</div>
                            </li> */}
                        </ul>
                    </nav>
                </React.Fragment>
            }
        </div>
    );
};

export default withRouter(NavButton);