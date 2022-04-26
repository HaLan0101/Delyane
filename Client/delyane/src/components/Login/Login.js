import React from 'react';
import './Login.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
const Login = () => {
    return (
        <div className='login__main'>
            <div className='login__form'>
                <form>
                    <h1>Login Individual Account!</h1>
                    <hr className='header__line'/>
                    <Input
                    label="Email address"
                    name="email"
                    id="email"
                    type="email"
                    classes="input"
                    required={true}
                    placeholder="Entrer email address"
                        />
                    <Input
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    classes="input"
                    required={true}
                    placeholder="Enter Password"
                        />
                    <Button title="Login Account" type="submit" classes="btn"></Button>
                    <h3 className='forgetPassword'>Mot de passe perdu</h3>
                    <h3 className='new'>
                        Nouveau client ? <b><a href="/register">Créer un compte</a></b>
                    </h3>
                </form>
            </div>
            
        </div>
    );
}

export default Login;
