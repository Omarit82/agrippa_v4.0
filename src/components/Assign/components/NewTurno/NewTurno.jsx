import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from '../../../../firebase/config';
import { addDoc, collection, doc, getDoc, updateDoc,Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { filterTurnosContext } from "../../../../context/filterTurnosContext";
import { UserContext } from "../../../../context/userContext";

export const NewTurno = ({ paciente }) => {
    const { user } = useContext(UserContext);
    const { handleFilter } = useContext(filterTurnosContext);
    const { register, handleSubmit, watch } = useForm();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

  
    const loadNewTurno = async (data) => {
        try {
            if (!data.fecha || !data.hora) {
                Swal.fire("Error", "Por favor completa fecha y hora", "error");
                return;
            }

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });

            Toast.fire({ icon: "success", title: "Turno Cargado" });
            window.scrollTo({ top: 0, behavior: "smooth" });

            const fecha = new Date(`${data.fecha}T${data.hora}`);
            
            setInfo({
                'dia': Timestamp.fromDate(fecha),
                'horario': data.hora,
                'paciente': paciente,
                'numeroSesion': paciente.sessions - paciente.remaining + 1,
                'user_id': user.user.uid
            });
        } catch (error) {
            Swal.fire("Error", "No se pudo guardar el turno", "error");
        }
       
    };

    const onFechaChange = (e) => {
        const value = e.target.value;
        if (value) {
            handleFilter(value);
        }
    };

    const ajusteSesiones = () =>{
        const pacienteRef = doc(db,"pacientes",paciente.id)
        getDoc(pacienteRef)
        .then((snapshot)=>{
            updateDoc(pacienteRef,{remaining:paciente.remaining-1})

        })

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

    return (
        <>
            <h4 className="text-center">Nuevo Turno</h4>
            <form onSubmit={handleSubmit(loadNewTurno)} className="d-flex flex-column">
                <input 
                    {...register('fecha', { 
                        required: true,
                        onChange: onFechaChange 
                    })} 
                    type="date" 
                    className="w-50 m-auto" 
                />
                
                <input 
                    {...register('hora', { required: true })} 
                    type="time" 
                    className="w-50 m-auto mt-2" 
                />
                
                <button type="submit" className="btn btn-info w-50 m-auto mt-3">
                    Cargar turno
                </button>
            </form>
        </>
    );
};