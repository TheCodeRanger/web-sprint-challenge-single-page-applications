import React from 'react';
import { Link } from 'react-router-dom';
import Styling from '../styling/navBar.css';

const NavBar = () => {
    return (
        <div className='navBar link'>
            <Link to='/'>Home </Link>
            <Link to='/pizza'>Pizza </Link>
        </div>
    )
}

export default NavBar;