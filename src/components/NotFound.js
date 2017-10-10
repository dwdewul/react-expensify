import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <Link to='/' >Go Home</Link>
        </div>
    );
}

export default NotFoundPage;