import React, { createContext, useContext, useEffect, useState } from "react";


const userContext = createContext(null);
const api_endpoint = '/all_purpose_practice/user/currentUser';

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => getUser(), []);

    const getUser = () => {
        fetch(api_endpoint, {
            method: 'GET',
            headers: { 'Content-Type':'application/json;utf-8' },
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    }

    return (
        <userContext.Provider value={ user }>
            { children }
        </userContext.Provider>
    )
}

export const myUserContext = () => {
    return useContext(userContext);
}


export default UserContextProvider;