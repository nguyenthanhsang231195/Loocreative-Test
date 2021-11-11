import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
<div className="top-navbar">
    <div className="left-navbar">
       <img src="/images/logo@3x.png" alt=""></img>
    </div>

    <div className="right-navbar">
        <ul>
            <li> Introduction </li>

            <li> Solution</li>

            <li> Rate plan </li>

            <li className="li-special"> | </li>

            <li> Login </li>

            <li> Apply for free use </li>
        </ul>
    </div>  
</div>
    )
}
