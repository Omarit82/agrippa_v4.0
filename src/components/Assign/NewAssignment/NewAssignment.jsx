import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { PatientContext } from "../../../context/patientContext";
import Select from 'react-select';
import { Turno } from "../Turno/Turno";


export const NewAssignment = () => {
    const { patients } = useContext(PatientContext);
    const { getValues, register, handleSubmit } = useForm();
    const [selected, setSelected] = useState(null);
    const [options, setOptions] = useState([]);
    const [turnos, setTurnos] = useState();
 
    useEffect(()=>{
        const aux = [];
        if(patients == undefined){
            window.location.href = '/'
        }
        patients.map((pac) => (aux.push({value:pac.id , label:`${pac.lastName}, ${pac.name}`, patient:pac})));
        setOptions(aux)
    },[patients])

    const assignAppo = () => {
        
    }
    
    useEffect (()=>{
        if(selected != undefined){
        setTurnos(selected.patient.turns);
        
        }
    },[selected])
    
    return(
        <form onSubmit={handleSubmit(assignAppo)} className="d-flex flex-column">
            <Select defaultValue={selected} onChange={setSelected} options={options} />
            {selected && 
                <div className="m-2 asignar">
                    <h3 className="text-center">{selected.patient.lastName}, {selected.patient.name}</h3> 
                    <div className="d-flex flex-column">
                    {
                        turnos && turnos.map((item,key)=>(<Turno item={item} key={key} />))
                    }
                    </div>
                    
                </div>
            }
            <div className="d-flex justify-content-around mt-2">
                <button type="submit" className="btn btn-info ">Cargar</button>
                <button type="button" className="btn btn-info ">Agregar Sesiones</button>
            </div>                        
        </form>
    )
}