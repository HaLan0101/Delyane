import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';

const Header = () => {
    const [links, setLinks] = useState(false)

    const handleClick = () => {
        setLinks(!links)
    }

    return (
        <div className={`header__main ${links ? 'show__nav' : 'hide__nav'}`}>
                <ul className='header__logo'>
                    <li>
                        <a href="/"><img className='header__img' src="/logo.png" alt="logo" /></a>
                    </li>
                    <li>
                        <a href="/"><div className='header__name'>DELYANE</div></a>
                    </li>
                </ul>

            <ul className='header__nav'>
                <li className='nav__item'>
                    <a href='/' className='nav__link'>Home</a>
                </li>
                <li className='nav__item'>
                    <a href='/painting' className='nav__link'>Painting</a>
                </li>
                <li className='nav__item'>
                    <a href='/authentication' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-user" /></a>
                </li>
                <li className='nav__item'>
                    <a href='/authentication' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-heart" /></a>
                </li>
                <li className='nav__item'>
                <a href='/authentication' className='nav__link'><FontAwesomeIcon className='nav__icon' icon="fa-solid fa-basket-shopping" /></a>
                </li>
            </ul>
            <button className='nav__burger' onClick={handleClick}>
                <span className='burger__bar'></span>
            </button>
        </div>
    );
}

export default Header;