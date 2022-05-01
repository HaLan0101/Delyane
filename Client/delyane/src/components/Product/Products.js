import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import ListItem from '../Caroussel/ListItem/ListItem';
import './Products.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get('http://localhost:8080/products')
                setProducts(result.data);
                console.log(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    }, []);

    return (
        <>
        <Header />
        <div className='product__main'>
            <div className='product__content'>
                <h1 className='product__title'>Painting</h1>

                <ul className='product__list'>
                    <li className='product__filter'>
                        <div className='product__category'>Category</div>
                        <div className='product__prix'>Prix</div>
                    </li>
                    <li className='product__art'>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </li>
                </ul>
                {/* {products.map(product => {
                    return (
                        <div className='product__content' key={product.uuid}>
                            <img src={`http://localhost:8080/${product.image}`} alt={product.title} />
                            <p className='product__title'>{product.title}</p>
                            <p className='product__artist'>Artist</p>
                            <p className='product__dimension'>Dimensions</p>
                            <p className='product__price'>{product.price} €</p>

                            <Link to={`/painting/${product.uuid}`}>
                                <button>Click</button>
                            </Link>
                        </div>
                    )
                })} */}
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default Product;

