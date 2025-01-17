import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)


    if (!user) return <h1>Please login</h1>
    return <div>Welcome! {user.username} and password {user.password}</div>
}

export default Profile