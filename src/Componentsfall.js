import React from 'react'
import Header from './Components/pages/Header'
import Filter from './Components/pages/Filter'
import BrowserCategories from './Components/pages/Browser Categories/BrowserCategories';
import BackToTop from './Components/pages/Back To Top/BackToTop';
import Footer from './Footer.js'
import Navbar from './Components/Navbar';





export default function Componentsfall() {
	return (
		<>	
			<Navbar />
			<Header />
			<Filter />
			<BrowserCategories />
			<BackToTop />
			<Footer/>
		</>
	)
}
