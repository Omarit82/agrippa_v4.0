import { useContext, useEffect, useState } from "react";
import { Navegador } from "../Navegador/Navegador"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { TurnoCard } from "./TurnoCard";
import { UserContext } from "../../context/userContext";


export const Turnos = () => {
    const { user } = useContext(UserContext)
    
    const [ turnos, setTurnos ] = useState([]);
    useEffect(()=>{
        /**** TRAIGO LOS Turnos DE LA DB ******/
        const listado = collection (db,"turnos");
        const data = query (listado, where("user_id", "==", user.user.uid), orderBy("dia","desc"));
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
                <h2 className="text-center pt-2">Listado de Turnos:</h2>
                <div className="p-2">
                    {
                        turnos.map((tt)=>(
                            <TurnoCard turno={tt} key={tt.id} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}