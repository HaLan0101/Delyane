import React from 'react';

import { Link } from "react-router-dom";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './ListItem.css';

const ListItem = (props) => {

    return (
        <div>
            <div className='listItem__main' key={props.uuid}>
                <div className='listItem__top'>
                    <button className='listItem__favorite'>
                        <FavoriteBorderIcon className='listItem__icon' />
                    </button>
                    <Link to={`/painting/${props.uuid}`}>
                        <img className='listItem__image' src={props.image} alt={props.title} />
                    </Link>
                </div>
                <div className='listItem__content'>
                    <p className='listItem__text'>Jérôme Mesnager</p>
                    <p className='listItem__text'>Dansons sous les arbres, 2022</p>
                    <p className='listItem__text listItem__style'>220 €</p>
                    <p className='listItem__text'>{props.title}</p>
                    <p className='listItem__text'>{props.description}</p>
                    <p className='listItem__text'>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
