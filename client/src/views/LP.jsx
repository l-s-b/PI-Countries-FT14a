import React from 'react';
import { Link } from 'react-router-dom';

const LP = function() {
    return (<>
    <h2>Hey! I'm the Landing Page.</h2>
    <Link to= '/main'>Wanna enter the site?</Link>
    </>);
}

export default LP;