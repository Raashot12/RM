import { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
const useLogin = (callback) => {
	const [login, setlogin] = useState({ email: "",password: "" })

let history = useHistory()

	// new state for errors handling
	// function that validate this error 
	// and pass the function back to form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setlogin({
			...login,
			[name]: value,

		})
	}



	function handleSubmit(e) {
		e.preventDefault()
		callback();

		fetch('https://mnte.herokuapp.com/api/v1/users/login', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(login),
		})
		.then((response) => response.json())
			.then((data) => {	history.push("/event");
			toast()
			console.log("success:", data);

			})
			.catch((error) => {
				console.error("Error:", error);
					history.push("/login")

			});
	}




	useEffect(() => {
		/// check to see if there are no errors 
		// and if there are no errors  then i called my callback
		
			callback();
		

	});

	return {
		handleChange,
		handleSubmit,
		login,
	
	}
}
export default useLogin;