import React from 'react';
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';

const SmBtn = props => {
    return(
        <React.Fragment>
            <div className="social-btn">
                <span>
                    <a className="button" herf="#"><span><FiFacebook/></span></a>
                </span>
                <span>
                    <a className="button" herf="#"><span><FiInstagram/></span></a>
                </span>
                <span>
                    <a className="button" herf="#"><span><FiYoutube/></span></a>
                </span>
                <span>
                    <a className="button" herf="#"><span><FiMail/></span></a>
                </span>
            </div>
        </React.Fragment>
    );
};
export default SmBtn;