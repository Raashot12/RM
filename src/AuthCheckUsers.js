

export const AuthCheckUsers = () => {
	const token = localStorage.getItem("token")
if (token === null){
	return false
}else {
	return true
}
	
}
