// import React from 'react'

import { useAuth } from "@/contexts/authContext"

function profile() {
    const {user} = useAuth();

    return (
        <>
            <h1>Profile</h1>
            <h1>{user.email}</h1>
        </>
    )
}

export default profile