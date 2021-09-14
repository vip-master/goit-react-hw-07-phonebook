import {v4 as uuidv4} from 'uuid'
import { getData, postData, deleteData } from "../utils/API"
import { loadContacts, addContact as add, delContact as del, loader } from "./actions"


export const error = (err) => () => {
	alert(err)
}

export const load = () => async (dispatch) => {
	dispatch(loader(true))

	const request = await getData()

	if(!request.isError){
		dispatch(loadContacts(request.data || []))
	} 
	else {
		dispatch(error(request.statusText+". Code:"+request.status))
	}
	dispatch(loader(false))
}

export const addContact = (contact) => async (dispatch) => {
	dispatch(loader(true))
	contact={id: uuidv4(), ...contact}

	const request = await postData(contact)

	if(!request.isError){
		dispatch(add(contact))
	} 
	else {
		dispatch(error(request.statusText+". Code:"+request.status))
	}
	dispatch(loader(false))	
}

export const delContact = (id) => async (dispatch) => {
	dispatch(loader(true))

	const request = await deleteData(id)

	if(!request.isError){
		dispatch(del(id))
	} 
	else {
		dispatch(error(request.statusText+". Code:"+request.status))
	}
	dispatch(loader(false))		
}