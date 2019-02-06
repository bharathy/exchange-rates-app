import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <ul className="w-full">
    	<li className="inline-block p10"><Link to="/home">Home</Link></li>
    	<li className="inline-block p10"><Link  to="/about">About</Link></li>
    	<li className="inline-block p10"><Link  to="/rates">Rates</Link></li>
    </ul>
);

export default NavBar;