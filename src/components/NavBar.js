import React, { Component } from 'react';


class NavBar extends Component {

    render() {
        return (
            <>
                <header>
                    <div className="сontainer">
                        <div className="Nav">
                            <div className="NavMenu">
                                <div className="NavMenuLink">
                                    <li>
                                        <a href="/" className="NavLink">Home</a>
                                    </li>
                                    <li>
                                        <a href="/About" className="NavLink">About</a>
                                    </li>
                                    <li>
                                        <a href="/productss#products-anchor" className="NavLink">Download</a>
                                    </li>
                                    <li>
                                        <a href="/ContactUS" className="NavLink">ContactUS</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default NavBar;