import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = () => {
    return (
        <div>
            <div className='listItem'>
            <img className='image' src="/product.png" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <FontAwesomeIcon icon="fa-solid fa-heart-circle-plus" />
                </div>
                <div className='itemNameArtist'>Name here</div>
                <div className="itemNameProduct">
                    <span className='year'>Year</span>
                    <span className="size">49x49</span>
                    <span>Edition</span>
                </div>
                <div className="price">320e</div>
            </div>
            </div>
        </div>
    );
}

export default ListItem;
