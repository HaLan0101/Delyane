import React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <button type={props.type} className={props.classes} onClick={props.function}>
             {props.title}
        </button>
    );
}

export default Button;
