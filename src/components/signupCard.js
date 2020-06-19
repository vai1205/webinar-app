import React from 'react';
import src1 from '../resources/images/team1.jpg';
import src2 from '../resources/images/team2.jpg';

const SignupCard = props => {
    const toggleForm = () => {
        let container = document.querySelector(".si-container");
        container.classList.toggle('active')
    }
    return(
        <React.Fragment>
            <section className="si-section">
            <div className="si-container">
                <div className="user si-signinBx">
                    <div className="si-imgBx">
                        <img src={src1}/>
                    </div>
                    <div className="si-formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username" />
                            <input type="password" name="" placeholder="Password" />
                            <input type="submit" name="" value="Login" />
                            <p className="si-signup">
                                Don't have an account? 
                                <a href="#" onClick={toggleForm}>Sign Up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user si-signupBx">
                    <div className="si-formBx">
                        <form>
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Username" />
                            <input type="email" name="" placeholder="Email Address" />
                            <input type="number" name="" placeholder="Mobile Number" />
                            <input type="password" name="" placeholder="Create Password" />
                            <input type="submit" name="" value="Sign Up" />
                            <p className="si-signup">
                                Already have an account? 
                                <a href="#" onClick={toggleForm}>Sign In</a>
                            </p>
                        </form>
                    </div>
                    <div className="si-imgBx">
                        <img src={src2}/>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    );
};

export default SignupCard;