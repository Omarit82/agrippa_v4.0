import { useEffect, useState } from 'react';
import Select from 'react-select';
import './style.css';
import { NewTurno } from '../NewTurno/NewTurno';

export const Seleccionador = ({pacientes}) =>{
    const options = [];
    const [ elegido, setElegido ] = useState();
    const [ sesiones, setSesiones] = useState();

    useEffect(()=>{
        if(pacientes != undefined){
            pacientes.map((item, key) => (options.push({value:{item} ,label:`${item.lastName}, ${item.name} | Sesiones: ${item.sessions}`})))     
        }
       
    }) 

    const selection = (selected) =>{
        setElegido(selected.value.item);
        setSesiones(parseInt(selected.value.item.remaining))
    }

    return(
        <>
            <Select onChange={selection} options={options} />
            {elegido && <h3 className='text-center'>{elegido.lastName}, {elegido.name} restan <span className='sesiones'>{elegido.remaining}</span> sesiones</h3>}
            <hr className="ruler" />
            {sesiones>0 && <NewTurno paciente = {elegido}/>}
        </>
    )
}