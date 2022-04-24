import React, { useState } from 'react';

import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    const [links, setLinks] = useState(false)

    const handleClick = () => {
        setLinks(!links)
    }

    return (
        <div className={`header__main ${links ? 'show__nav' : 'hide__nav'}`}>
            <div className='header__logo'>
                <ul className='header__image'>
                    <li>
                        <img className='logo' src="/logo.png" alt="logo" />
                    </li>
                    <li>
                        <img className='name' src="/delyane.png" alt="name" />
                    </li>
                </ul>
            </div>
            <ul className='header__nav'>
                <li className='nav__item'>
                    <a href='/' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-basket-shopping" /></a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-user" /></a>
                </li>
                <li className='nav__item'>
                    <a href='/' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-heart" /></a>
                </li>
            </ul>
            <button className='nav__burger' onClick={handleClick}>
                <span className='burger__bar'></span>
            </button> 
            <hr />
        </div>
    );
}

export default Header;
