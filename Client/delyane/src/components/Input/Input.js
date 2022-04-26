import React from 'react';
import './Input.css';
const Input = (props) => {
    return (
        <div className='form__group' >
            <label htmlFor="">{props.label}</label>
            <input type={props.type}
            id={props.id}
            name={props.name}
            onChange={props.handleChange}
            required={props.required}
            placeholder={props.placeholder}
            className={props.classes}
            value={props.value}
            />
        </div>
    );
}

export default Input;
