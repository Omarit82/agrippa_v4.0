import { useForm } from "react-hook-form"
import { Navegador } from "../Navegador/Navegador"
import { useContext, useEffect, useState } from "react";
import { PatientContext } from "../../context/patientContext";
//import { AppointmentContainer } from "../AppointmentContainer/AppointmentContainer";
import Select from 'react-select';
import './style.css';
import { AppointmentContainer } from "../AppointmentContainer/AppointmentContainer";


export const Assign = () => {
    const { getValues, register, handleSubmit } = useForm();
    const { patients } = useContext(PatientContext);
    const [selected, setSelected] = useState(null);
    const [options, setOptions] = useState([]);
 
    useEffect(()=>{
        const aux = [];
        patients.map((pac) => (aux.push({value:pac.id , label:`${pac.lastName}, ${pac.name}`, patient:pac})));
        setOptions(aux)
    },[patients])

    const assignAppo = () => {
        console.log(selected);
        console.log(getValues());
    }

    return (
        <main>
            <Navegador />
            <h2 className="text-center">Asignar Turno</h2>
            <div className="d-flex">
                <div className="w-50 p-3 turnosAsignados">
                    <h3 className="text-center">Turnos Asignados:</h3>
                    <AppointmentContainer />
                </div>
                <hr className="separador" />
                <div className="w-50 p-3">
                    <form onSubmit={handleSubmit(assignAppo)} className="d-flex flex-column">
                        <Select defaultValue={selected} onChange ={setSelected} options={options} />
                        {selected && 
                            <div className="m-2 asignar">
                                <h3 className="text-center">{selected.patient.lastName}, {selected.patient.name}</h3> 
                                {
                                }
                            </div>
                        }
                        <div className="d-flex justify-content-around mt-2">
                            <button type="submit" className="btn btn-info ">Cargar</button>
                            <button type="button" className="btn btn-info ">Agregar Sesiones</button>
                        </div>                        
                    </form>
                </div>
                
            </div>
        </main>
    )
}