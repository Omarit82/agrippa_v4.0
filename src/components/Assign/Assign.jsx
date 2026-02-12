import { useContext, useEffect, useState } from "react";
import { Navegador } from "../Navegador/Navegador";
import { Timestamp, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from '../../firebase/config'
import { Seleccionador } from "./components/Seleccionador/Seleccionador";
import { Loader } from "../Loader/Loader";
import { filterTurnosContext } from '../../context/filterTurnosContext';
import { UserContext } from "../../context/userContext";

export const Assign = () =>{
    const [ patients, setPatients ] = useState();
    const { fecha } = useContext(filterTurnosContext);
    const { user } = useContext(UserContext);
    
    useEffect(() => { 
        if(fecha != undefined){
        //TRAIGO LOS TURNOS DE LA DB 
        const array = collection (db, "turnos");
        const data = query (
            array,
            where('dia','>=',fecha),
            orderBy("dia","asc")
        );
        getDocs(data).then((snapshot)=>{
            snapshot.forEach((doc) => {
               // console.log( doc.data());
            })
        }).catch((error) => {
            console.log (error);
        })}
    },[fecha])

    
    useEffect(()=>{
        /**** TRAIGO LOS PACIENTES DE LA DB ******/
        const listado = collection (db,"pacientes");
        const data = query (listado,where("user_id","==",user.user.uid) ,orderBy("lastName","asc"));
        getDocs(data)
        .then((snapshot)=>{
            setPatients(
                snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            )
        })
    },[]);
   
    return(
        <>
            <Navegador />
            <main>
                <h2 className="text-center">Asignar Turnos:</h2>
                {patients == undefined ? <Loader /> :
                <div className="d-flex justify-content-center">
                    <div className="w-50 p-2 ">
                        <h3>Paciente:</h3>
                        <Seleccionador pacientes={patients} />
                    </div>
                </div> }
            </main>
        </>
    )
}