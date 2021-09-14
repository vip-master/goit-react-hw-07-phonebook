import React from 'react'
import { useDispatch } from "react-redux";
import { load } from '../redux/operations'
import Section from '../Components/section/Section';
import Form from '../Components/form/Form';
import ContactsList from '../Components/contactsList/ContactsList';
import Filter from '../Components/filter/Filter';

let isMount=false

const App=()=>{
    const dispatch = useDispatch()

    if(!isMount){
        isMount=true
        dispatch(load())
    }
    
    return (
            <>
                <h1>Phonebook</h1>
                <Section title="">
                    <Form />
                </Section>
                <Section title="Contacts">
                    <Filter />
                    <ContactsList />
                </Section>
            </>
    )
}

export default App
