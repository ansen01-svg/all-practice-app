import React, { createContext, useContext, useEffect, useState } from "react";


const userContext = createContext(null);
const api_endpoint = 'http://localhost:5010/all_purpose_practice/user/currentUser';

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // setTimeout(() => getUser(), 1000)
        getUser()
    }, []);

    const getUser = () => {
        fetch(api_endpoint, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => setUser(data.user))
        .catch(error => console.log(error))
    }

    return (
        <userContext.Provider value={{ user }}>
            { children }
        </userContext.Provider>
    )
}

export const myUserContext = () => {
    return useContext(userContext);
}


export default UserContextProvider;