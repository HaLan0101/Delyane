import React from 'react';

import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <div className='footer__main'>
            <ul className='footer__list'>
                <li className='footer__item'><a href=""><h3>Oeuvres</h3></a></li>
                <li className='footer__item'><a href=""><h3>Artistes</h3></a></li>
                <li className='footer__item'><a href=""><h3>Favoris</h3></a></li>
                <li className='footer__item'><a href=""><h3>Contactez-nous</h3></a></li>
                <li className='footer__item'><a href=""><h3>Mon compte</h3></a></li>
                <li className='footer__item'>
                    <h4>Paiements sécurisés</h4>
                    <ul className='footer__payment'>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-paypal" /></li>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-visa" /></li>
                        <li className='payment__item'><FontAwesomeIcon className='payment__icon' icon="fa-brands fa-cc-mastercard" /></li>
                    </ul>
                </li>
                <li className='footer__item'>
                    <h3>Newsletter</h3>
                    <input type="text" />
                </li>
            </ul> 
            <div className='footer__text'> 
                <p className='text__item' >DelYane est une place de marché dédiée à la vente d'œuvres d'art contemporain en ligne. Galeries d'art, exposez vos œuvres sur Internet avec Artsper. Amateurs d'art, concrétisez votre achat de tableau contemporain, de photo d'art ou encore de sculpture <br></br> contemporaine à travers des milliers d'œuvres d'art en ligne, issues d'artistes contemporains rigoureusement sélectionnés ! </p>
                <p className='text__item' >Copyright ©2022 all rights reserved DelYane</p>
            </div>
        </div>
    );
}

export default Footer;
