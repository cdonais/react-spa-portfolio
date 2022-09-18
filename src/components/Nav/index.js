import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <header className='flex-row px-1'>
            <h1>
                <a href="/">
                     Carly Donais
                </a>
            </h1>
            <nav id='navbar'>   
            <NavLink to='/' end={true}>
                            About
                        </NavLink>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                        <NavLink to='/portfolio'>
                            Portfolio
                        </NavLink>
                        <NavLink to='/resume'>
                            Resume
                        </NavLink>
            </nav>
        </header>
    );
}

export default Nav;