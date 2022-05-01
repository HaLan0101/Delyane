import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = () => {
    return (
        <div>
            <div className='listItem'>
                <div className='itemImage'>
                    <img className='image' src="https://desenio.fr/bilder/artiklar/zoom/16059_2.jpg?imgwidth=435&qt=Berlin%20Shapes%20No1%20Affiche" alt="" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-heart-circle-plus" />
                </div>
                <div className='itemContent'>
                    <h5>Name Artist</h5>
                    <h5>Name Product, Year</h5>
                    <h5>59x59</h5>
                    <h5>Edition</h5>
                    <h5>520e</h5>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
