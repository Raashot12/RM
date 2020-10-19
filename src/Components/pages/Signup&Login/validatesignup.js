export default function validatesignup(values ){
	let errors = {}
	if ( !values.email) {
		errors.email = "Email is required"
	}else if ( !/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	if (!values.password) {
		errors.password = "Password is required";

	}else if (values.password.length  < 6){
		errors.password = "Password need to be more than 6 characters'";
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Password is required';
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = 'Passwords do not match';
	}

	if (!values.firstName){
		errors.firstName = "First Name is required"
	}
	if (!values.lastName ){
		errors.lastName = "Last Name is required "
	}
	if(!values.phone){
		errors.phone = "Phone number is required"
	}


	if(!values.username){
		errors.username = "Username is required"
	}


	return errors;
}