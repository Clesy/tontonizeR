import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import back from '../images/arrow.svg';


export const NavBar = () => {
    const [status, setStatus] = useState('close');
    const [active, setActive] = useState(false);

    /* Scroll animation */
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const classID = anchor.getAttribute('href').substr(1);
            document.getElementById(classID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    /* Scroll to Top */

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <header id="nav">
            <div className="сontainer">
                <div className="navigation">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div
                        className={active ? 'nav-menu active' : 'nav-menu'}
                        onClick={() => setActive(!active)}>
                        <nav>
                            <a href
                                id = "menuBtn"
                                className="menu-btn"
                                role="button"
                                onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                                <span className={status}></span>
                            </a>
                            <a href="#nav" className="nav-link"> Home</a>
                            <a href="#team" className="nav-link">Our team</a>
                            <a href="#products" className="nav-link">Products</a>
                            <a href="#contact" className="nav-link">ContactUS</a>
                        </nav>
                    </div>
                </div>
                <button id='backToTop' className="back-to-top" onClick={scrollToTop} >
                    <img src={back} alt="Back to top" />
                </button>
            </div>
        </header>

    );
}
