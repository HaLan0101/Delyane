import React from 'react';
import './ListItem.css';
import { Link } from "react-router-dom";
import Button from '../../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = (props) => {
    return (
        <div>
            <div className='listItem' key={props.uuid}>
                <div className='itemImage'>
                    <img className='image' src={props.image} alt="" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-heart-circle-plus" />
                </div>
                <div className='itemContent'>
                    <h5>{props.title}</h5>
                    <h5>{props.description}</h5>
                    <h5>{props.category}</h5>
                    <h5>Artist</h5>
                    <h5>{props.price}</h5>
                </div>
                <div className="itemButton">
                    <Link to={`/painting/${props.uuid}`}>
                        <Button title="See more" className="item__button"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
