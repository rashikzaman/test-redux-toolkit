import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateName} from '../stores/user'

export default function Name() {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.user)
    const [value, setValue] = useState("")

    const handleName = () => {
        dispatch(updateName(value))
    }

    return (
        <div>
            <span>{name}</span>
            <input name="name" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleName}>Update Name</button>
        </div>
    )
}
