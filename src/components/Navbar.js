import React from "react";
import { Link } from "react-router-dom";
import '../Navbar.css';
import logo from '../image/logo.jpg';


function Navbar() {
    return (
        <section className="navbar mw-100">
            <div className="logosection">
                <ul id="logosection">
                    <li>
                        <img src={logo} alt="logo" className="image-responsive rounded-circle" style={{ height: "40px", width: "40px" }} />
                    </li>
                    <li className="list" id="logo"><span className="text-info">Virtual</span>Tour</li>

                </ul>
            </div>
            <div className="list">
                <ui id="lists">
                    <li className="list" id="home">
                    <a href='/' >Home</a>
                    </li>
                    <li className="list" id="market">
                    <a href='#vrapp' >360-View</a>
                    </li>
                     <li className="list" id="Portfolio">
                      <Link to='/explore'>Explore</Link>
                    </li>
                    <li className="list" id="about">
                    <a href='#about' >About</a>
                    </li>
                   
                </ui>
            </div>
            <div className="signup" >
                <ul id="signup">
                    <li>Log In</li>
                    <li>
                    <a href='#signup' >Get started free</a>
                        </li>
                </ul>
            </div>

        </section>
    );
}
export default Navbar;