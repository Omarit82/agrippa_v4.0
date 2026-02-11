import { NavLink } from "react-router-dom";
import './style.css';


export const Navegador = () => {

    return (
      <nav className="d-flex justify-content-start align-items-start navbar">
        <NavLink to={'/Turnos'} className="link btn btn-success m-3" >Turnos</NavLink>
        <NavLink to={'/Assign'} className="link btn btn-success m-3" >Asignar Turno</NavLink>
        <NavLink to={'/New'} className="link btn btn-success m-3" >Nuevo Paciente</NavLink>
      </nav>
    )
}