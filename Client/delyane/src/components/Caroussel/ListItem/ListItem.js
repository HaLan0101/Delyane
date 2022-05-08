import React, { useState } from 'react';
import { Link } from "react-router-dom";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './ListItem.css';

const ListItem = (props) => {
    const [favorite, setFavorite] = useState(false);

    return (
        <div>
            <div className='listItem__main' key={props.uuid}>
                <div className='listItem__top'>
                    <button className='listItem__favorite' onClick={() => setFavorite(!favorite)}>
                        {favorite ? <FavoriteIcon className='listItem__icon' /> : <FavoriteBorderIcon className='listItem__icon' />}
                    </button>
                    <Link to={`/painting/${props.uuid}`}>
                        <img className='listItem__image' src={`http://90.22.250.124:8080${props.image}`} alt={props.title} />
                    </Link>
                </div>
                <div className='listItem__content'>
                    <p className='listItem__text'>Jérôme Mesnager</p>
                    <p className='listItem__text'>{props.title}</p>
                    <p className='listItem__text listItem__style'>{props.price}€</p>
                    <p className='listItem__text'>{props.description}</p>
çç                </div>
  
  3          </div>
        </div>
    );
}

export default ListItem;
