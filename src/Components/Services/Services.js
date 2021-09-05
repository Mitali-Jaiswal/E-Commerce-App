import './Services.css';
import React from 'react'
import Service from './service';

export default function Services() {
    return (
        <div className="services">
            <Service title="FREE SHIPPING" icon="fas fa-shipping-fast" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
            <Service title="100% REFUND" icon="fas fa-hand-holding-usd" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
            <Service title="SUPPORT 24/7" icon="far fa-user " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
            
        </div>
    )
}

