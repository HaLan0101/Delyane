import React from 'react';
import './Login.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
const Login = () => {
    const bannerStyle = {
        backgroundImage: 'url(https://desenio.fr/bilder/inspiration/5a9559030b21a.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div className='login__main' style={bannerStyle}>
            <div className='login__form'>
                <form className='login__form__content'>
                    <h1>Login Individual Account!</h1>
                    <hr className='header__line'/>
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
                    <Button title="Login Account" type="submit" className="register__button"></Button>
                    <h3 className='forgetPassword'>Forgot password</h3>
                    <h3 className='register__text'>
                        New customer ? <b><a href="/authentification">Register</a></b>
                    </h3>
                </form>
            </div>
            
        </div>
    );
}

export default Login;
