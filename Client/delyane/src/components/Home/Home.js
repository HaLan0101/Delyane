import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <>
        <div className='hero__main'>
            <img className='hero__img' src="/hero.png" alt="" />
        </div>
        <div className='main__bestSeller'>
            Meilleurs Ventes
        </div>
        <div className='main__others'>
            Coup de Coeur
        </div>
        </>
    );
}

export default Home;
