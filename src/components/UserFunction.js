import axios from 'axios';

export const register = newUser => {
	return axios
	.post('users/register', {
		first_name: newUser.first_name,
		last_name: newUser.last_name,
		email: newUser.email,
		gender: newUser.gender,
		username: newUser.username,
		password: newUser.password,
	})
	.then(res => {
		alert("Registered");
	})
}

export const login = user => {
	return axios
	.post('users/login', {
		email: user.email,
		password: user.password,
	})
	.then(res => {
		if(res) {
			localStorage.setItem('usertoken', res.data)
			return res.data
		}
	})
	.catch(err => {
		console.log(err)
	})
}