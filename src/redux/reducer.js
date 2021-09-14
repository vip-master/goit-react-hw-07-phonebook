import {  createReducer } from "@reduxjs/toolkit";
import {
	loadContacts,
	addContact,
	delContact,
	filter,
	loader
} from "./actions"

const initState = {
	contacts:[], 
	filter:"",
	loading:false
}

export const reducer = createReducer(initState,{
	[loadContacts]: ({filter, contacts: prevContacts},{payload})=>({
		filter, 
		contacts: [...prevContacts, ...payload]
	}),
	
	[addContact]: ({filter, contacts: prevContacts},{payload})=>{
		const contacts = [...prevContacts]
		contacts.push({...payload})
		return ({filter, contacts});
	},

	[delContact]: ({filter, contacts: prevContacts},{payload})=>({
		filter, 
		contacts: prevContacts.filter(i=>i.id!==payload)
	}),

	[filter]: ({contacts},{payload})=>{
		return ({filter: payload, contacts: [...contacts]})
	},

	[loader]: (state,{payload})=> ({...state, loading: payload})
})