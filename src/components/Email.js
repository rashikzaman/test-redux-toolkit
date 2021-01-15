import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateEmail, getEmail} from '../stores/user'

export default function Email() {
    const dispatch = useDispatch()
    const email = useSelector(state => getEmail(state))
    const [value, setValue] = useState("")

    const handleEmail = () => {
        dispatch(updateEmail(value))
    }

    return (
        <div>
            <span>{email}</span>
            <input name="email" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleEmail}>Update Mail</button>
        </div>
    )
}
