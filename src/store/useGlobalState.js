import {useReducer} from "react";

// this allows me to use a switch case that take two argument state and action  

const reducer = (state, action ) =>{
	switch(action.type){
		case "LOGIN" :
		return {
			isLoggedIn: true
		};
		case "LOGOUT":
			return {
				isLoggedIn: false
			};
			default:{
				return state
			}
	}
};

const useGlobalState = () =>{
	const [globalState, globalDispatch] = useReducer(reducer, {
		isLoggedIn: false
	})

	return { globalState, globalDispatch}
}

export default useGlobalState;