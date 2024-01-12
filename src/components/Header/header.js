import React, { useState } from "react";
import { Link } from "react-scroll";
import './header.css';
const Header = () => {
    const [selected, setSelected] = useState(1);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="logo">
                            <h1>Develop<span>er</span></h1>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="navbar-menu">
                            <nav class="navbar navbar-expand-lg " id="navbar">
                                <div class="container">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <Link to="home" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "home" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("home")}
                                                    >
                                                        Home
                                                    </h5>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="about" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "about" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("about")}
                                                    >
                                                        About
                                                    </h5>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="skills" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "skills" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("skills")}
                                                    >
                                                        Skills
                                                    </h5>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="experience" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "experience" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("experience")}
                                                    >
                                                        Experience
                                                    </h5>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="projects" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "projects" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("projects")}
                                                    >
                                                        Projects
                                                    </h5>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="contact" smooth={true} duration={500}>
                                                    <h5 className={
                                                        selected === "contact" ? "navbar-menu--active" : undefined
                                                    }
                                                        onClick={() => setSelected("contact")}
                                                    >
                                                        Contact
                                                    </h5>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="modes">
                                        <div id="toggle">
                                            <i class="indicator"></i>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;