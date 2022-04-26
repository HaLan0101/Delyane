import React from 'react';
import Header from '../Header/Header';

import './Error.css';

const Error = () => {
    return (
        <div className='error__main'>
            <Header />
            <div className='error__content'>
                <h1>404</h1>
                <h2>Error 404 - Page can't be found</h2>
                <p>We're sorry, the page you requested doesn't exist. Plase make sure you typed in the correct URL</p>
                <button>
                    Return to Home
                </button>
            </div>
        </div>
    );
}

export default Error;