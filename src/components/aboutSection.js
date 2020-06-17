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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laudantium eum magnam odit asperiores quam earum aut tenetur illo, exercitationem esse dolorum eligendi aliquid illum repudiandae nisi non cumque et!</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis molestias suscipit sit similique, deserunt rem explicabo quia minus tenetur, dolor accusantium? Adipisci cumque cum, rem neque dolor voluptatibus unde.</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
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