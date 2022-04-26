import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Product = () => {
    const [product, setProduct] = useState({});

    const { uuid } = useParams();

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:8080/product/${uuid}`)
            setProduct(result.data);
            console.log("RESULT", result.data);
        }
        getData()
    }, [uuid]);

    return (
        <div>
            <h1>I'm a product</h1>
            <p>{product.title}</p>
        </div>
    );
}

export default Product;
