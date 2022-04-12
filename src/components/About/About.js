import React, {useContext} from 'react'
import { UserContext } from '../../UserContext'

export const About = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            <h2>This is about</h2>
            <p>{user}</p>
        </div>
    )
}

