import './SingleSection.css';

import React from 'react'

export default function SingleSection() {
    return (
        <div className="singleSection">
            <div className="text ">
                <h5>iPhone 6 Plus</h5>
                <p>Performance and design. Taken <br/> right to the edge.</p>
                <p className="shopNow">SHOP NOW</p>
            </div>
            <div className="img-section">
                <img src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
            
        </div>
    )
}
