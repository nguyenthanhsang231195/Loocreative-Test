import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export default function Dropdown() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [icon, setIcon] = useState(false);
    const showIcon = () => setIcon(!icon);

    return (
<div className="dropdown-navbar-mobie">
    <div className="mobie-left-navbar">
       <img src="/images/logo@3x.png" alt=""></img>
    </div>

    <div className="mobie-right-navbar">
        <span onClick={showIcon}>
            {icon 
            ? <i className="fas fa-ban" onClick={showSidebar}></i>
            : <i className="fas fa-align-justify" onClick={showSidebar}/>
            }
        </span>

        <div className=
        {sidebar 
        ? "navbar-active" 
        : "navbar-close"}>
            <ul>
                <Link to="/introduction" >
                    <li>
                        <h2 className="text-dropdown"> Introduction </h2> 
                    </li>
                </Link>
                <Link to="/solution">
                    <li>    
                        <h2 className="text-dropdown"> Solution </h2>
                    </li>
                </Link>
                <Link to="/rate">
                    <li>
                        <h2 className="text-dropdown"> Rate plan </h2>
                    </li>
                </Link>
                <Link to="/login">
                    <li>
                        <h2 className="text-dropdown"> Login </h2> 
                    </li>
                </Link>
                <Link to="/apply">
                    <li>
                        <h2 className="text-dropdown"> Apply for free use </h2>     
                    </li>
                </Link>
            </ul>
        </div>
    </div>  
</div>
    )
}
