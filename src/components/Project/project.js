import React from 'react';
import './project.css';
import { Element } from 'react-scroll';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
const project = () => {
    return (
        <Element name="projects" id="projects" className="projects">
            <div className='container'>
                <h2>My Project</h2>
                <div className='row'>
                    <div className='col-4'>
                        <a href='https://highthink.in/' target='_blank'>
                            <div className='box'>
                                <img src={project1} className='img-fluid' alt='project1' />
                                <div className='box-link'>
                                    <a href='https://highthink.in/' target='_blank'>
                                        <i class="fa-solid fa-link"></i>
                                    </a>
                                </div>
                                <div className='box-cnt'>
                                    <h5>Highthink Media</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-4'>
                        <a href='https://e2eexcite.com/' target='_blank'>
                            <div className='box'>
                                <img src={project2} className='img-fluid' alt='project2' />
                                <div className='box-link'>
                                    <a href='https://e2eexcite.com/' target='_blank'>
                                        <i class="fa-solid fa-link"></i>
                                    </a>
                                </div>
                                <div className='box-cnt'>
                                    <h5>E2E Events</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-4'>
                        <a href='https://www.scheppershotelrome.com/' target='_blank'>
                            <div className='box'>
                                <img src={project3} className='img-fluid' alt='project3' />
                                <div className='box-link'>
                                    <a href='https://www.scheppershotelrome.com/' target='_blank'>
                                        <i class="fa-solid fa-link"></i>
                                    </a>
                                </div>
                                <div className='box-cnt'>
                                    <h5>Hotel Scheppers Rome</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='space'></div>
                <div className='row'>
                    <div className='col-4 pending'>
                        <a href='https://saisanjanastationery.com/' target='_blank'>
                            <div className='box'>
                                <img src={project4} className='img-fluid' alt='project4' />
                                <div className='box-link'>
                                    <a href='https://saisanjanastationery.com/' target='_blank'>
                                        <i class="fa-solid fa-link"></i>
                                    </a>
                                </div>
                                <div className='box-cnt'>
                                    <h5>Sai Sanjana Stationery</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Element >
    );
};

export default project;