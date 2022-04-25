import React from 'react';
import './Home.css';
import List from '../List/List';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
    return (
        <>
        <div className='hero__main'>
            <img className='hero__img' src="/hero.png" alt="" />
        </div>
        <div className='main__bestSeller'>
            <h1>Meilleurs Ventes</h1>
            <p>Découvrer les oeuvres que nos collectionneurs adorent</p>
            <div className='main__list'>
                <List></List>
            </div>
        </div>
        <div className='main__other'>
            <ul className='other__list'>
                <li className='other__item'><h1>Coup de Coeur</h1></li>
                <li className='other__item'><FontAwesomeIcon className='other__icon' icon="fa-solid fa-heart" /></li>
            </ul>
            <p>Découvrez nos oeuvres coup de coeur</p>
        </div>
        </>
    );
}

export default Home;
