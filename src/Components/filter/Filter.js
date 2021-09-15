import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from '../../redux/contactsSelectors'
import { filter } from '../../redux/actions'

function Filter() {

	const value = useSelector(getFilter)

	const dispatch = useDispatch()

	const onChange = (e) => dispatch(filter(e.target.value.trim()))

    return (

        <>
            <h4>Contacts filter</h4>
            <input value={value} name="filter" type="text" onChange={onChange} />
        </>
    )
}

export default Filter

