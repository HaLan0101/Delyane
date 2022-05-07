import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Button from '../../Button/Button';
import List from '../../Caroussel/List/List';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Product.css';
const Product = () => {
    const [product, setProduct] = useState({});
    const {uuid} = useParams();
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`http://90.22.250.124:8080/product/${uuid}`)
                setProduct(result.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [uuid]);

    

    return (
        <>
        <Header />

        <div className='product__main'>
            <div className='product__content'>
                <div className='product__detail'>
                    <div className='product__image'>
                        <img src={`http://90.22.250.124:8080${product.image}`} alt={product.image} />
                    </div>
                    <div className='product__info'>
                        <p className='product__title'>{product.title}</p>
                        <p className='product__description'>{product.description}</p>
                        <p className='product__price'>{product.price}</p>
                        <Button title="Add to cart" className="product__button"/><br />
                        <FontAwesomeIcon className="product__favorite" icon="fa-solid fa-heart-circle-plus" />
                    </div>
                </div>
                <div className='product__moreInfo'>
                    <h2>All about</h2>
                    <hr class="dividerSolid__bolder"></hr>
                    <div className='product__moreInfoList'>
                        <p className='product__technique'>Technique </p>
                        <p className='product__technique'>Technique name</p>
                    </div>
                    <hr class="dividerSolid"></hr>
                    <div className='product__moreInfoList'>
                        <p className='product__dimension'>Dimensions </p>
                        <p className='product__dimension'>600x900 </p>
                    </div>
                    <hr class="dividerSolid"></hr>
                    <div className='product__moreInfoList'>
                        <p className='product__tirage'>Tirage </p>
                        <p className='product__tirage'>Tirage name</p>
                    </div>
                    <hr class="dividerSolid"></hr>
                    <div className='product__moreInfoList'>
                        <p className='product__auth'>Authentification </p>
                        <p className='product__auth'>Authentification name</p>
                    </div>
                    <hr class="dividerSolid__bolder"></hr>
                </div>
                <div className='product__sameStyle'>
                    <h2>Same Style</h2>
                    <List></List>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}


export default Product;

