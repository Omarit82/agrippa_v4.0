import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from '../firebase/config'; 


export const PatientContext = createContext();
export const PatientProvider = ({ children }) =>{
    const [ patients, setPatients ] = useState();
    
    useEffect(()=>{
        const listado = collection (db,"pacientes");
        const data = query (listado, orderBy("lastName","asc"));
        getDocs(data)
        .then((snapshot)=>{
            setPatients(
                snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            )
        })
    },[])
               
    const valores = {
        /**Aca va lo que exporto */
        patients
    }

    return (
        <PatientContext.Provider value={valores} >
            { children }
        </PatientContext.Provider>
    )
}