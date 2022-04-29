import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div className='footer__main'>
            <ul className='footer__list'>
                <li className='footer__item'><a href='/painting'><h3>Artworks</h3></a></li>
                <li className='footer__item'><a href=""><h3>Artists</h3></a></li>
                <li className='footer__item'><a href=""><h3>Contact us</h3></a></li>
                <li className='footer__item'><a href=""><h3>My account</h3></a></li>
                <li className='footer__item'>
                    <h3>Secure payment</h3>
                    <ul className='footer__payment payment__responsive'>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-paypal" /></li>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-visa" /></li>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-mastercard" /></li>
                    </ul>
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
