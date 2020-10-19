import {useState ,useEffect} from "react"
import {useHistory} from "react-router-dom"
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useForm = ( callback, validates) =>{
	const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: "", username: "", password: "", confirmPassword: "", })
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
	
	const history=useHistory()


  const notify = () => {
    toast.success("Congratulation you have Signup Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };


	function handleSubmit(e) {
    e.preventDefault();
    callback();

    //handling errors
    setErrors(validates(values));
    setIsSubmitting(true);
    //Setting input to initiial state
    fetch("https://mnte.herokuapp.com/api/v1/users/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          history.push("/Signupflow");
          notify();
          const token = data.accessToken;
          console.log(token);
          localStorage.setItem("token", token);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Ooop! Invalid  email or password",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
	
	

	useEffect(() => {
		/// check to see if there are no errors 
		// and if there are no errors  then i called my callback
		if ( Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	},);

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	}
}

export default useForm;