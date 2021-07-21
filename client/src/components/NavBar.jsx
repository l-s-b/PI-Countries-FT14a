import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
    return (<div className='Nav'>
    <Link className='link home' to= '/main'>Henry Countries</Link>
    <Link className='link' to= '/activities'>Touristic Activities</Link>
    <Link className='link' to= '/add-country'>Add Custom Country</Link>
    <Link className='link' to= '/add-activity'>Add New Activity</Link>
    </div>);
}

export default NavBar;

