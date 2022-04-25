import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Products.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get('http://localhost:8080/products')
            setProducts(result.data);
            console.log(result.data);
        }
        getData()
    }, []);

    return (
        <div className='product__main'>
            <h1>Painting</h1>

            {products.map(product => {
                return (
                    <div className='product__content' key={product.uuid}>
                        <p>{product.image}</p>
                        <p>{product.title}</p>
                        <p>Artist</p>
                        <p>Dimensions</p>
                        <p>{product.price} €</p>
                        <Link to={`painting/${product.uuid}`}>
                            <button>Click</button>
                        </Link>
                    </div>
                )
            })}

        </div>
    );
}

export default Product;
