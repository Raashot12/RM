import React from 'react'
import App from './App';
import Header from './Components/pages/Header';
import Filter from './Components/pages/Filter'
import BrowserCategories from './Components/pages/Browser Categories/BrowserCategories';
export default function Componentsfall() {
	return (
		<div>
			<App />
			<Header />
			<Filter/>
			<BrowserCategories/>
		</div>
	)
}
