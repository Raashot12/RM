import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const useLogin = (callback) => {
  const [login, setlogin] = useState({ email: "", password: "" });

  let history = useHistory();
  const notify = () => {
    toast.success("You have been logged In", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // const Swal = require('sweetalert2')

  // new state for errors handling
  // function that validate this error
  // and pass the function back to form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({
      ...login,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    callback();

    fetch("https://mnte.herokuapp.com/api/v1/users/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.status === "success") {
          history.push("/event");
          notify();
          console.log(data);
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
        history.push("/login");
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
  };
};
export default useLogin;
