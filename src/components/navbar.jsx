import '../App.css';
import { useState } from "react";
import BgParticle from './particle';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <a href="#"><Link to={"/"}>T s .</Link></a>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
            <button className='menu-btn'>&#9776;</button>
        </div>
    );
}
