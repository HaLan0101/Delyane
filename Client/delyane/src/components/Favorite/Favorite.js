import React from 'react';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

import './Favorite.css';

const Favorite = () => {
    return (
        <div className='favorite__main'>
            <Header />
            <div className='favorite__content'>
                <h1 className='favorite__title'>My favorites</h1>
                <p className='favorite__subtitle'>Find the works, artists and galleries you have followed. A completed and bigger wishlist will allow our experts to send you personalised suggestions.</p>

                <div className='favorite__diviser'></div>

                <div className='favorite__container'>
                    <img src='../images/canape.png' alt='' className='container__picture' />
                    <h2 className='container__title'>Add artworks to favorites</h2>
                    <p className='container__subtitle'>You have not yet added any artworks to your favorites. To find your next favorite, explore our catalog.</p>
                    <button className='container__button'>See all artworks</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Favorite;
