import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

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

        <div>
            <p>Technique </p>
            <p>Dimensions </p>
            <p>Tirage </p>
            <p>Authentification </p>
        </div>
    );
}

export default Product;
