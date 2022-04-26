import React from 'react';
import '../Login/Login.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
const Register = () => {
    return (
        <div className='login__main'>
            <div className='login__form'>
                <form>
                    <h1>Register Individual Account!</h1>
                    <p>For the purpose of gamers regulation, your details are required.</p>
                    <hr className='header__line'/>
                    <Input
                    label="Email address*"
                    name="email"
                    id="email"
                    type="email"
                    classes="input"
                    required={true}
                    placeholder="Entrer email address"
                        />
                    <Input
                    label="Create password*"
                    name="password"
                    id="password"
                    type="password"
                    classes="input"
                    required={true}
                    placeholder="Password"
                        />
                    <Input
                    label="Repeat password*"
                    name="password"
                    id="password"
                    type="password"
                    classes="input"
                    required={true}
                    placeholder="Repeat password"
                        />
                    <Button title="Register Account" type="submit" classes="btn"></Button>
                    <h3 className='new'>
                        Déjà client ? <b><a href="/login">Se connecter</a></b>
                    </h3>
                </form>
            </div>
            
        </div>
    );
}

export default Register;
