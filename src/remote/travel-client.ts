import axios from 'axios';

export const travelClient = axios.create({
	baseURL: 'http://localhost:8080',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})