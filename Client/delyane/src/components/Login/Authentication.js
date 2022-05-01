import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
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
        <>
        <Header />
        <div className='login__main' style={bannerStyle}>
            <div className='login__form'>
                <form className='login__form__content'>
                    <h1>Login Individual Account!</h1>
                    <hr className='header__line' />
                    <Input
                        label="Email address"
                        name="email"
                        id="email"
                        type="email"
                        className="register__input"
                        required={true}
                        placeholder="Entrer email address"
                    />
                    <Input
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        className="register__input"
                        required={true}
                        placeholder="Enter Password"
                    />
                    <Button title="Login Account" type="submit" className="register__button" />
                    <h3 className='register__text'>
                        New customer? <b><a href="/register">Register</a></b>
                    </h3>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Authentication;
