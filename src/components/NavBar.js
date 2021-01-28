import React, { useState } from 'react';
import logo from '../images/Logo.svg';


export const NavBar = () => {
    const [status, setStatus] = useState('close');
    const [active, setActive] = useState(false);

    return (
        <>
            <header>
                <div className="сontainer">
                    <div className="Nav">
                        <div className="NavLogo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div 
                        className={active ? 'NavMenu active' : 'NavMenu'}
                        onClick={() => setActive(!active)}>
                            {active ? 'close' : 'open'}
                            <nav>
                                <a href
                                    className="menuBtn"
                                    role="button"
                                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                                    <span className={status}></span>
                                </a>
                                <a href="/" className="NavLink">Home</a>
                                <a href="/About" className="NavLink">About</a>
                                <a href="/productss" className="NavLink">Download</a>
                                <a href="/ContactUS" className="NavLink">ContactUS</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
