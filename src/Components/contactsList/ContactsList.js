import React from 'react'
import ContactItem from './contactItem/ContactItem';
import { useSelector, useDispatch } from "react-redux";
import { delContact } from '../../redux/operations'
import { getFContacts, isLoading } from '../../redux/contactsSelectors'

function ContactsList() {

    const contacts = useSelector(getFContacts)
    const loader = useSelector(isLoading)
    const dispatch = useDispatch()

    const onDelete = (e)=> dispatch(delContact(e.target.id))

    return (
        <>
            {loader && <h4>Loading...</h4>}
            <ul>
                {contacts.map(contact=> !contact.hidden && (
                    <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
                ))}
            </ul>
        </>
    )
}

export default ContactsList

