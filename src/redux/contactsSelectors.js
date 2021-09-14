import { createSelector } from "@reduxjs/toolkit"


export const getFilter = ({filter})=>filter

export const isLoading = ({loading})=>loading

const getContacts = ({contacts})=>contacts

const getProps = (_,props)=>props


export const getFContacts = createSelector(
	[getContacts,getFilter],
	(contacts, filter) => contacts.filter(i=>i.name.toLowerCase().startsWith(filter.split(" ").join("").toLowerCase()))
)

export const isContact = () => createSelector(
	[getContacts,getProps],
	(contacts, {name, number})=> contacts.some(i=>
		i.number===number || i.name.toLowerCase()===name.toLowerCase()
	)
)














