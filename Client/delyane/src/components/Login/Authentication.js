import React from 'react';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

import './Authentication.css';

const Authentication = () => {

    const bannerStyle = {
        backgroundImage: 'url(https://desenio.fr/bilder/inspiration/5a9559030b21a.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div>
            <Header />
            <div className='authentication__main' style={bannerStyle}>
                <div className='authentication__content'>
                    <form className='authentication__form'>
                        <h1 className='authentication__title'>Delyane</h1>
                        <h2 className='authentication__subtitle'>The Art is yours</h2>
                        <input
                            label='Username'
                            name='username'
                            id='username'
                            type='text'
                            placeholder='Enter your username'
                            className='authentication__input'
                        />
                        <input
                            label='Password'
                            name='password'
                            id='password'
                            type='password'
                            placeholder='Enter your password'
                            className='authentication__input'
                        />
                        <p className='authentication__password'>Forgot your password?</p>
                        <button className='authentication__button' type='submit'>Log in</button>
                        <p className='authentication__text'>New customer? <a className='authentication__login' href='/register'>Register</a></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Authentication;
