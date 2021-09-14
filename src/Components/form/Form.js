import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { useSelector, useDispatch } from "react-redux";
import { isContact } from '../../redux/contactsSelectors'
import { addContact, error } from '../../redux/operations'
// import { addContact } from '../../redux/actions'

const _INITIAL_STATE_={
    name:"",
    number: "",
}

const Form=()=>{   
    
    const [state,setState]=useState(_INITIAL_STATE_)
    const isAlert = useSelector(isContact(state))
    const dispatch = useDispatch()

    const handleChange=({target:{name,value}})=>{
        setState(state=>({...state,[name]: value.trim()}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()  

        const {name,number}=state

        if(isAlert){
            dispatch(error(`This ${name} is already exist.`))   

            return
        }     

        dispatch(addContact({name,number}))
            
        setState({..._INITIAL_STATE_})
    }

        return(
            <form>
                <label>
                    <h3>Name</h3>
                    <input value={state.name} type="text" name="name" onChange={handleChange}/>
                </label>
                <label>
                    <h3>Number</h3>
                    <InputMask mask="+99(999)-99-99" value={state.number} type="tel" name="number" onChange={handleChange}/>
                </label>
                <button type="submit" onClick={handleSubmit}>Add contact</button>
            </form>
        ) 
}

export default Form