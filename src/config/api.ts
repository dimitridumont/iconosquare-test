import axios from "axios"

const options = {
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
}

export const api = axios.create(options)

const onResponseSuccess = (response: any) => response

const onResponseFail = (error: any) => Promise.reject(error.response?.data)

api.interceptors.response.use(onResponseSuccess, onResponseFail)
