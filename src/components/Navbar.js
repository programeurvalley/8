import React from 'react'
import { Link } from 'react-router-dom'


// Assests
import logo from '../assests/logo.png'

export default function Navbar() {
    return (
        <nav className='navbar navbar-inverse navbar-fixed-top headroom' style={{opacity: 0.8}}>
            <div className='container' >
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a href='#' className='navbar-brand'>
                        <img src={logo} alt='progreccuss' />
                    </a>
                </div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav pull-right'>
                        
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                        <li><Link to='signin'>Sign In / Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
