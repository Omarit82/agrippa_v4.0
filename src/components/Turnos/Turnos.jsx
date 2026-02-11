import { useEffect, useState } from "react";
import { Navegador } from "../Navegador/Navegador"
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import { TurnoCard } from "./TurnoCard";


export const Turnos = () => {
    
    const [ turnos, setTurnos ] = useState([]);
    useEffect(()=>{
        /**** TRAIGO LOS Turnos DE LA DB ******/
        const listado = collection (db,"turnos");
        const data = query (listado, orderBy("dia","desc"));
        getDocs(data)
        .then((snapshot)=>{
            setTurnos(
                snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            )
        })
    },[]);
    return (
        <>
            <Navegador />
            <main>
                <h2 className="text-center">Listado de Turnos:</h2>
                {
                    turnos.map((tt)=>(
                        <TurnoCard turno={tt} />
                    ))
                }
            </main>
        </>
    )
}