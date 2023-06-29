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
                    <li className="list font-bold font-mono ml-5 mt-2 text-zinc-700" id="logo"><span className="text-info  ">VIRTUAL</span>TOUR</li>

                </ul>
            </div>
            <div className="list">
                <ui id="lists">
                    <li className="list" id="home">
                    <a className="font-medium" href='/' >Home</a>
                    </li>
                    <li className="list" id="market">
                    <a className="font-medium" href='#vrapp' >360-View</a>
                    </li>
                     <li className="list" id="Portfolio">
                      <Link to='/explore' className="font-medium" >Explore</Link>
                    </li>
                    <li className="list" id="about">
                    <a className="font-medium" href='#about' >About</a>
                    </li>
                   
                </ui>
            </div>
            <div className="signup" >
                <ul id="signup">
                    <li className="font-medium">Log In</li>
                    <li>
                    <a font-medium href='#signup' >Get started free</a>
                        </li>
                </ul>
            </div>

        </section>
    );
}
export default Navbar;