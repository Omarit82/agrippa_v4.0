import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [error, setError] = useState('');

    const handleRegister = (data) => {
        console.log(data);
    }
    
    const handleLogin = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((user)=>{
            console.log("Usuario logueado: "+user);
        })
        .catch((error)=> {
            setError("error");
            console.error("Error en el incio de sesion!!"+error);
        })
    }

    const valores = {
        handleLogin,
        handleRegister,
        error
    }

    return(
        <UserContext.Provider value={ valores } >
            {children}
        </UserContext.Provider>
    )
}