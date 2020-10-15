import {useState ,useEffect} from "react"


const useForm = ( callback, validates) =>{
	const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: "", username: "", password: "", password2: "", })
	const[checked, setChecked] = useState(false)
	const [errors, setErrors] = useState({ })
	const [isSubmitting, setIsSubmitting] = useState(false)
	// new state for errors handling
	// function that validate this error 
	// and pass the function back to form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		
		})
		setChecked(!checked)
	}
	
	

	function handleSubmit(e) {
		e.preventDefault()
		callback();
		
		//handling errors
		setErrors(validates(values))
		setIsSubmitting(true)
		//Setting input to initiial state
		fetch('https://mnte.herokuapp.com/api/v1/users/signin', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				console.log(values)

			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	
	

	useEffect(() => {
		/// check to see if there are no errors 
		// and if there are no errors  then i called my callback
		if ( Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}

	}, );

	return {
		handleChange,
		handleSubmit,
		values,
		checked,
		errors,
	}
}
export default useForm;