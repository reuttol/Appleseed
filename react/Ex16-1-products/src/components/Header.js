import React from 'react';
import {Link} from 'react-router-dom';

import './app.css';

const Header = (props) =>{
    console.log(props);

    return (
        <div className="header-container">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
    );
}

export default Header;