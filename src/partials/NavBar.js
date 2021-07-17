import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<ul className='ul-nav-bar'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/articles-list'>Articles</Link>
				</li>
				<li>
					<Link to='/about-us'>About Us</Link>
				</li>
				<li>
					<Link to='/about'>About Me(the creator)</Link>
				</li>
			</ul>
		</>
	);
};

export default NavBar;
