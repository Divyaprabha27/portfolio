import React from 'react';
import './experience.css';
import { Element } from 'react-scroll';
const experience = () => {
    return (
        <Element name="experience" className="experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Work Experience</h2>
                            <i class="fa-solid fa-building-columns"></i>
                        </div>
                    </div>
                </div>
                <div className="experience-content">
                    <div className="cd-timeline">
                        <div class="cd-timeline-block">
                            <div className='row'>
                                <div className="col-5 left-side">
                                    <h4>Web Designer</h4>
                                    <span>High Think Media Box</span>
                                </div>
                                <div className="col-2">
                                    <div className='cd-timeline-img'>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className='col-5 right-side'>
                                    <p>April 2019 to September 2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className='row'>
                                <div className="col-5 right-side">
                                    <p>October 2017 to January 2019</p>

                                </div>
                                <div className="col-2">
                                    <div className='cd-timeline-img'>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className='col-5 left-side'>
                                    <h4>Web Designer</h4>
                                    <span>Vconnect Media Box</span>
                                </div>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className='row'>
                                <div className="col-5 left-side">
                                    <h4>Web Designer</h4>
                                    <span>W3cert Technologies</span>
                                </div>
                                <div className="col-2">
                                    <div className='cd-timeline-img'>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className='col-5 right-side'>
                                    <p>February 2016 to September 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className='row'>
                                <div className="col-5 right-side">
                                    <p>December 2014 to December 2015</p>
                                </div>
                                <div className="col-2">
                                    <div className='cd-timeline-img'>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className='col-5 left-side'>
                                    <h4>Web Designer</h4>
                                    <span>Scotwebtech Technologies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='endpoint'></div>
            </div>
        </Element>
    );
};

export default experience;