import './Navbar.css';
import {Link} from 'react-router-dom';
import React from 'react'

function NavBar() {
    return (
        <div className="navbar">
            <div  >
                <Link className="link" to="/" ><h1>iSHOP</h1></Link>
            </div>
            <div className="nav-items">
                <h5>My Profile</h5>
                <Link className="link" to="/cart"><h5>Cart</h5></Link>
            </div>
        </div>
    )
}

export default NavBar
