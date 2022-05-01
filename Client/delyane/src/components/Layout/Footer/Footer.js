import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div className='footer__main'>
            <ul className='footer__list'>
                <li className='footer__items'><a href='/painting'><h3 className='footer__item'>Artworks</h3></a></li>
                <li className='footer__items'><a href=""><h3 className='footer__item'>Artists</h3></a></li>
                <li className='footer__items'><a href=""><h3 className='footer__item'>Contact us</h3></a></li>
                <li className='footer__items'><a href=""><h3 className='footer__item'>My account</h3></a></li>
                <li className='footer__items'>
                    <h3 className='footer__item'>Secure payment</h3>
                </li>
            </ul>

            <div className='footer__newsletter'>
                <h3 className='newsletter__title'>Let's stay in touch! We'll let you know about the latest sales and new releases!</h3>
                <div className='newsletter__content'>
                    <input
                        label='Email'
                        name='email'
                        id='email'
                        type='mail'
                        placeholder='Enter your email'
                        className='newsletter__input'
                    />
                    <button className='newsletter__button'>Sign up</button>
                </div>
            </div>

            <div className='footer__copyright'>
                <p>Copyright ©2022. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
