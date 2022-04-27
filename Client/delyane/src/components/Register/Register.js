import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Login/Login.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
const Register = () => {
    const [user, setUser] = useState({});

    const submitRegister = async (e) => {
        console.log(user);
        e.preventDefault();
        const url = 'http://localhost:8080/user';
        try {
            await axios.post(url, user);
        } catch (err) {
            console.log(err)
        }
    };
    const bannerStyle = {
        backgroundImage: 'url(https://desenio.fr/bilder/inspiration/5a9559030b21a.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div className='login__main' style={bannerStyle}>
            <div className='login__form' >
                <form className='login__form__content' onSubmit={(e) => submitRegister(e)}>
                    <h1>Register Individual Account!</h1>
                    <p>For the purpose of gamers regulation, your details are required.</p>
                    <hr className='header__line'/>
                    <Input
                    label="Username"
                    name="username"
                    id="username"
                    type="text"
                    className="register__input"
                    required={true}
                    placeholder="Entrer a username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    <Input
                    label="Email address*"
                    name="email"
                    id="email"
                    type="email"
                    className="register__input"
                    required={true}
                    placeholder="Entrer email address"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    <Input
                    label="Create password*"
                    name="password"
                    id="password"
                    type="password"
                    className="register__input"
                    required={true}
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    <Button title="Register Account" type="submit" className="register__button"></Button>
                    <h3 className='register__text'>
                    Already customer? <b><a href="/login">Login</a></b>
                    </h3>
                </form>
            </div>
            
        </div>
    );
}

export default Register;
