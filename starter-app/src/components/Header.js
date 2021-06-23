import React from 'react';
import './Header.css';
import spin from './plane.png';



function Header(props) { 
    return (
        <div className="header">
            <a href = "/ ">
                <img src={spin} className="header-logo-left" alt="logo" />
            </a>
            &nbsp;  &nbsp;   Movie Search Tool  &nbsp;   &nbsp;
            <a href = "/ ">
                <img src={spin} className="header-logo-right" alt="logo" />
            </a>
        </div>
    )
}

export default Header;