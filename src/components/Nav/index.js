import React from 'react';


function Nav() {
    return (
        <header className='flex-row px-1'>
            <h1>
                <a href="/">
                     Carly Donais
                </a>
            </h1>
            <nav id='navbar'>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;