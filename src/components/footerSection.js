import React from 'react';
import SmBtn from '../components/smBtn'

const FooterSection = props => {
    return (
        <React.Fragment>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About Cardio Web India</h3>
                            <p>Cardio Web India is the professional body for cardiologists and those working in the area of cardiology including researchers, scientists, cardiovascular.</p>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h3>Contact Us</h3>
                            <div>Get complete details of all the upcoming events and also about the events conducted so far</div>
                            <div
                                className="button mt-2"
                                style={{ color: "#000" }}>
                                Call @ 9999757744
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Subscribe</h3>
                            <p>Subscribe to our news letter now. We won't send any spam, we promise! Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /></p>
                            <form action="#">
                                <div className="d-flex mb-5">
                                    <input type="text" className="form-control rounded-0" placeholder="Email" />
                                    <input type="submit" className="btn btn-primary rounded-0" value="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <SmBtn />
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <p className="text-muted">
                                    Copyright &copy; {new Date().getFullYear()} All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default FooterSection;