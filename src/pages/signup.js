import React from 'react';
import SignupCard from '../components/signupCard';
import Navbar from '../components/navbar';

const Signup = props => {
    return(
        <React.Fragment>
            <Navbar/>
            <SignupCard/>
        </React.Fragment>
    );
};

export default Signup;