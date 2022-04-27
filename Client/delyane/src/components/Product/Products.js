import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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
        <div className='product__main'>
            <h1>Painting</h1>

            {products.map(product => {
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
            })}

        </div>
    );
}

export default Product;

