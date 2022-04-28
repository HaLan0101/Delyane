import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import List from '../Caroussel/List/List';

import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className='hero__main'>
                <img className='hero__img' src="/hero.png" alt="" />
            </div>
            <div className='home__main'>
                <div className='main__bestSeller'>
                    <h1>Bestsellers</h1>
                    <p>Discover artworks our collectors love</p>
                    <div className='main__list'>
                        <List></List>
                    </div>
                </div>
                <div className='main__other'>
                    <ul className='other__list'>
                        <li className='other__item'><h1>Coup de Coeur</h1></li>
                    </ul>
                    <p>Découvrez nos oeuvres coup de coeur</p>
                    <div className='main__product'>
                        <img className='img1' src="/img1.png" alt="" />
                        <img className='img2' src="/img2.png" alt="" />
                        <br />
                        <img className='img3' src="/img3.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
