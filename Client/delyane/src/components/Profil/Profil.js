import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Button from '../Button/Button';
import './Profil.css';

const Profil = () => {
    const [user, setUser] = useState({});
    const username = localStorage.getItem('username');
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`http://90.22.250.124:8080/user/${username}`)
                setUser(result.data);
                console.log(user);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [username]);
    const logout=() =>{
        localStorage.removeItem('username');
        window.location = "/";
    }
    return (
        <div>
            <Header />
            <div className='profil__main'>
                <h1>My account</h1>
                <div className='profil__content'>
                    <div className='profil__image'>
                        {/* <img src={`http://90.22.250.124:8080${product.image}`} alt={product.image} /> */}
                        <img src="https://desenio.fr/bilder/artiklar/zoom/14663_2.jpg?imgwidth=435&qt=Plante%20noire" alt="" />
                    </div>
                    <div className='profil__info'>
                        <p className='profil__username'>Yaya</p>
                        <p className='profil__email'>yaya@gmail.com</p>
                        <Button title="Log out" className="profil__button" function={(e)=> logout(e)}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profil;
