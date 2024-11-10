import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from '../../../../firebase/config';
import { addDoc, collection, doc, getDoc, updateDoc,Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { filterTurnosContext } from "../../../../context/filterTurnosContext";

export const NewTurno = ({paciente}) =>{
    const { handleFilter } = useContext(filterTurnosContext);
    const { register, handleSubmit } = useForm();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const loadNewTurno = async(data) =>{
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Turno Cargado"
          })
          .then(
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Hace que el desplazamiento sea suave
            })
        )
        console.log(data);
        const fecha = new Date(data.fecha+"T"+data.hora);
        setInfo({
            'dia': Timestamp.fromDate(fecha),
            'horario': data.hora,
            'paciente':paciente,
            'numeroSesion': paciente.sessions - paciente.remaining +1
        })
    }

    const ajusteSesiones = () =>{
        const pacienteRef = doc(db,"pacientes",paciente.id)
        getDoc(pacienteRef)
        .then((snapshot)=>{
            updateDoc(pacienteRef,{remaining:paciente.remaining-1})
        })
    }
    const filter = (data) => {
        console.log(data);
    }

    useEffect(()=>{
        const turnos = collection(db,"turnos");

        if(info != undefined){
            addDoc(turnos, info)
            .then((doc)=>{
                ajusteSesiones();
                navigate('/Turnos')
            }).catch((e)=>{
                console.log(e);
            })
        } 
    },[info])

    return(
        <>
            <h4 className="text-center">Nuevo Turno</h4>
            <form onSubmit={handleSubmit(loadNewTurno)} className="d-flex flex-column">
                <input {...register('fecha')} onChange={(e)=>handleFilter(e.target.value)} name="fecha" type="date" className="w-50 m-auto" required/>
                <input {...register('hora')} name="hora"  type="time" className="w-50 m-auto mt-2" required />
                <button type="submit" className="btn btn-info w-50 m-auto mt-3">Cargar turno</button>
            </form>
        </>
    )
}
