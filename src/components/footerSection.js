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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h3>Links</h3>
                            <ul className="list-unstyled footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">What we do</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Subscribe</h3>
                            <p>Subscribe to our news letter now. We won't send any spam, we promise! Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/></p>
                            <form action="#">
                                <div className="d-flex mb-5">
                                    <input type="text" className="form-control rounded-0" placeholder="Email" />
                                    <input type="submit" className="btn btn-primary rounded-0" value="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <SmBtn/>
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