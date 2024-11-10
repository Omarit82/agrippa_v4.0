import { Timestamp } from "firebase/firestore";
import { createContext, useState } from "react";


export const filterTurnosContext = createContext();

export const FilterTurnosProvider = ( {children} ) => {
    const [fecha, setFecha] = useState();

    function handleFilter(s){
        const fechaJS = new Date(s)
        console.log(fechaJS)
        const f = Timestamp.fromDate(fechaJS)
        console.log(f);
        setFecha(f);
    }
    const values = {
        handleFilter,
        fecha
    }
    

    return(
        <filterTurnosContext.Provider value={values}>
            { children }
        </filterTurnosContext.Provider>
    )
}