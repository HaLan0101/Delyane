import React, { useState } from 'react';

import './Header.css';

const Header = () => {
    const [links, setLinks] = useState(false)

    const handleClick = () => {
        setLinks(!links)
    }

    return (
        <div className={`header__main ${links ? 'show__nav' : 'hide__nav'}`}>
            <div className='header__logo'>DELYANE</div>

            <ul className='header__nav'>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>Home</a>
                </li>
                <li className='nav__item'>
                    <a href='/painting' className='nav__link'>Painting</a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>Item</a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>Item</a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>Item</a>
                </li>
            </ul>
            <button className='nav__burger' onClick={handleClick}>
                <span className='burger__bar'></span>
            </button>
        </div>
    );
}

export default Header;