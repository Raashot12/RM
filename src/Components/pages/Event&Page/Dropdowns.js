import React, { useState } from 'react';
import { OrganizeItems } from './OrganizerItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdowns() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<ul
				onClick={handleClick}
				className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
				{OrganizeItems.map((item, index) => {
					return (
						<li key={index}>
							<Link
								className={item.cName}
								to={item.path}
								onClick={() => setClick(false)}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Dropdowns;
