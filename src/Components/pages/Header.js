import React from 'react'
// import { Button } from 'antd'
import './Header.css'
import Bounce from 'react-reveal/Bounce'


const Header = () => {
	return (
		<div>
			<div className='top-header' id='backtohome'>
				<div className='header-wrapper'>
					<Bounce right='100min'>
						<h1>Discover events for all the things you love</h1>

					</Bounce>
				</div>
			</div>
			<button className=' btn-header ' >Join RM</button>
		</div>

	)
}
export default Header;
