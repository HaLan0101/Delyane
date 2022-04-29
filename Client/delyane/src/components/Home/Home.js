import React from 'react';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import List from '../Caroussel/List/List';

import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            {/* ----------- To do : Carrousel ------------  */}
            <div className='home__swiper'>
                <img className='swiper__img' src='/hero.png' alt='' />
            </div>

            <div className='home__main'>
                <div className='home__bestsellers'>
                    <h1 className='home__title'>Bestsellers</h1>
                    <p className='home__subtitle'>Discover artworks our collectors love</p>
                    {/* ----------- To do : Carrousel ------------  */}
                    <div className='bestsellers__swiper'>
                        <List></List>
                    </div>
                </div>
                <div className='home__artists'>
                    <h1 className='home__title'>Featured Artists</h1>
                    <p className='home__subtitle'>The artists you should be keeping an eyes on</p>
                    {/* ----------- To do : Grid ------------  */}
                    <div className='main__product'>
                        <img className='img1' src='/img1.png' alt='' />
                        <img className='img2' src='/img2.png' alt='' />
                        <img className='img3' src='/img3.png' alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
