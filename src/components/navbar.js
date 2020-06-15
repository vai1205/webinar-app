import React, { useState, useEffect } from 'react';

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
        if(match.path === route){
            document.getElementById("navButton__background").classList.remove("navButton__clicked");
            setIsOpen(false);
            return;
        }
        history.push(route);
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
                            <li className="navButton__item" onClick={handleRedirect("/")}>
                                <div className="navButton__link">Home</div>
                            </li>
                            <li className="navButton__item" onClick={handleRedirect("/about")}>
                                <div className="navButton__link">About me</div>
                            </li>
                        </ul>
                    </nav>
                </React.Fragment>
            }
        </div>
    );
};

export default NavButton;