import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from '../../firebase/config';
import { useNavigate } from "react-router-dom";
import { Navegador } from "../Navegador/Navegador";
import Swal from 'sweetalert2';


export const New = () => {
    const { register, handleSubmit } = useForm();
    const [info, setInfo] = useState();
    const navigate = useNavigate();
  
    
    const loadNew = async(data) => {
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
            title: "Paciente Cargado"
          })
          .then(
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Hace que el desplazamiento sea suave
            })
          )
        const newPac = {
            'name': data.name,
            'lastName': data.lastName,
            'sessions': data.sessions,
            'phone': data.phone,
            'remaining': data.sessions
        }
        setInfo(newPac);
    }

    useEffect(()=>{
        const paciente = collection(db, "pacientes");
        
        if(info != undefined){
            addDoc(paciente, info)
            .then((doc)=>{
                navigate('/Assign');
            }).catch((e) => {
                console.log(e);
            })
        }
    },[info])

    return (
        <>        
            <Navegador />
            <main className="d-flex flex-column">
                <h2 className="text-center">Carga Nuevo Paciente</h2>
                <form onSubmit={handleSubmit(loadNew)} className="d-flex flex-column w-50 align-items-center m-auto mt-2">
                    <label htmlFor="name">Nombre</label>
                    <input {...register('name')} type="text" name="name" className="text-center"required/>
                    <label htmlFor="lastName">Apellido</label>
                    <input {...register('lastName')} type="text" name="lastName" className="text-center"required/>
                    <label htmlFor="sessions">Sesiones</label>
                    <input {...register('sessions')} type="number" name="sessions" className="text-center"required/>
                    <label htmlFor="phone">Telefono</label>
                    <input {...register('phone')} type="number" name="phone" className="text-center"required />
                    <button type="submit" className="btn btn-info mt-2">Registrar</button>
                </form>
            </main>
        </>

    )
}