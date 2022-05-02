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
                        <div className='product__category'>
                            <select name="genre" id="genre">
                                <option>Category</option>
                                <option value="1" >Painting</option>
                                <option value="2" >Photography</option>
                                <option value="3" >Editing</option>
                                <option value="4" >Sculpture</option>
                                <option value="5" >Design</option>
                            </select>
                        </div>
                        <div className='product__prix'>
                            <select name="genre" id="genre">
                                <option>Price</option>
                                <option value="1" > Lower than 500€ </option>
                                <option value="2" > 501€ - 1 000€</option>
                                <option value="3" > 1 001€ - 5 000€</option>
                                <option value="4" > 5 001€ - 10 000€</option>
                                <option value="5" > Higher than 10 000€</option>
                            </select>
                        </div>
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

