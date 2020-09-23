import React from 'react'
import './Filter.css'
import SliderRoot from './Slider';
import SliderBusinessCareer from './Business & Careers/Slider';
import SliderBeautyFashion from './Beauty & Fashion/Slider';






function Filter() {
	return (
		<div>
		<div className="wrap">
			<div className='container'>
			<div className="search">
				<form>
				<input type="text" class="searchTerm"  placeholder="Find your next event"/>
					<button type="search" className="searchButton" value='search'>
						<i className="fa fa-search"></i>
					</button>
						</form>
					</div>	
					<div>
					<form  className="search-form">
							<div className="search2">
								<form>
									<input type="text" class="searchTerm2" placeholder="Search by Category ex' Health" />
									<button style={{ outline: 'none' }} type="search" className="searchButton2" value='search'>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>	

					</form>
						<form className="search-form">
							<div className="search3">
								<form>
									<input type="text" class="searchTerm3" placeholder="Search by Category ex' Health" />
									<button style={{outline:'none'}} type="search" className="searchButton3" value='search'>
										<i className="fa fa-search"></i>
									</button>
								</form>
							</div>

						</form>
					</div>
   		</div>
			</div>
		<SliderRoot />
		<SliderBusinessCareer />
		<SliderBeautyFashion/>
		</div>
	)
}

export default Filter
