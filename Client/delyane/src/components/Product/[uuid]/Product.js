import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
const Product = () => {
    const [product, setProduct] = useState({});
    console.log(product);

    const { uuid } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/product/${uuid}`)
                setProduct(result);
                console.log("RESULT", result);
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [uuid]);

    console.log("TEST", uuid);

    return (
        <>
        <Header />

        <div className='product__main'>
            <div className='product__content'>
                <div className='product__image'></div>
                <div className='product__info'></div>
                <p className='product__technique'>Technique </p>
                <p className='product__dimension'>Dimensions </p>
                <p className='product__tirage'>Tirage </p>
                <p className='product__auth'>Authentification </p>
            </div>
        </div>
        <Footer/>
        </>
    );
}


export default Product;

