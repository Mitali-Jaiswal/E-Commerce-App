import React from 'react'
import './service.css';
export default function Service({title,desc,icon}) {
    return (
        <div className="service ">
            <i class={icon} ></i>
            <h5 className="text-center">{title}</h5>
            <p className="text-center">{desc}</p>
            
        </div>
    )
}
