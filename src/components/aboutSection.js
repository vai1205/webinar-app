import React from 'react';
import aboutImage from '../resources/images/about_1.jpg'
import Counter from './counter';
import {counterData} from '../resources/counterData';

const AboutSection = props => {
    return(
        <React.Fragment>
            <section className="site-section section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mr-auto mb-5">
                            <div className="mb-5">
                                <span className="section-sub-title d-block">About Cardio Web India</span>
                                <h2 className="section-title">What we do?</h2>
                                <p>The Society is the chief advocacy group for the profession and aims to facilitate training, professional development and improve medical practice to enhance the quality of care for patients with cardiovascular disease.</p>
                                <p>Our Aim & Objective is to attain advancement in scientific knowledge and research in the field of cardiovascular system in all aspects and to improve basic understanding to find better preventive measures and treatment of all type of cardiovascular disease.</p>
                                <p>We also hold periodical meetings, conferences & social gathering to arrange clinical disclosure discussion & demonstration of any subject of interest and welfare of the society.</p>
                                <p>To actively encourage research teaching and training programme at various centers.
                                The Society is the chief advocacy group for the profession and aims to facilitate training, professional development and improve medical practice to enhance the quality of care for patients with cardiovascular disease.</p>
                            </div>
                            <div className="row">
                                {
                                    counterData.map((c,i)=>
                                        <Counter key={i} count={c.count} label={c.label} icon={c.icon}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-absolute-box" >
                            <div className="box">
                                <div className="icon-wrap"><span className="flaticon-vector"></span></div>
                                <h3>Who we are?</h3>
                                <p>Body for cardiologists and those working in the area of cardiology including researchers, scientists, cardiovascular.</p>
                            </div>
                            <img src={aboutImage} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AboutSection;