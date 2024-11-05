import { Link, useParams } from "react-router-dom";
import newImage from './assets/img/new.png';
import './style.css';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const CardsListContainer = () => {
    const { pacienteId } = useParams();
    const [pacientes, setPacientes] = useState([]);

    useEffect(()=>{
        const listado = collection (db,"pacientes");

        getDocs(listado)
        .then((snapshot) => {
            setPacientes(
                snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
            );
            console.log(pacientes);
        }).catch((e) => {
            console.log(e);
        })
    },[pacienteId])
    

    

    return(
        <>
            <h2 className="text-center">Contenedor de turnos</h2>
            <Link to= {'/New'} ><img src={ newImage } className="new" /></Link>
            <div>
                {}
            </div>
        </>
    )
}