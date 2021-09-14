import axios from "axios"

const url = "http://localhost:3001/contacts/"

export const getData = async ()=>{

	let result

	try{
		result = await axios.get(url)
	}
	catch({response}){
		result={...response}
		result.isError=true
	}

	return result
}

export const postData = async (data)=>{

	let result

	try{
		result = await axios.post(url, data)
	}
	catch({response}){
		result={...response}
		result.isError=true
	}

	return result
}

export const deleteData = async (id)=>{

	let result

	try{
		result = await axios.delete(url+id)
	}
	catch({response}){
		result={...response}
		result.isError=true
	}

	return result
}