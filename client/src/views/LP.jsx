import React from 'react';
import { Link } from 'react-router-dom';

const LP = function() {
    return (<div className= 'LP'>
    <h2 className='h2'>Welcome to Henry countries</h2>
    <Link to= '/main'><button className='btn'>Take a look!</button></Link>
    </div>);
}

export default LP;