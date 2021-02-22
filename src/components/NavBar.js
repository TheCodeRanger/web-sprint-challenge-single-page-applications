import React from 'react';
import { Link } from 'react-router-dom';
import Styling from '../styling/navBar.css';

const NavBar = () => {
    return (
        <div className='navBar link'>
            <Link className='linkBtn' to='/'>Home </Link>
            <Link className='linkBtn' to='/pizza'>Pizza </Link>
        </div>
    )
}

export default NavBar;