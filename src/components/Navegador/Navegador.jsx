import { NavLink } from "react-router-dom";
import './style.css';


export const Navegador = () => {

    return (
      <nav className="d-flex justify-content-around align-items-center navbar">
        <NavLink to={'/Turnos'} className="link btn btn-success" >Turnos</NavLink>
        <NavLink to={'/Assign'} className="link btn btn-success" >Asignar Turno</NavLink>
        <NavLink to={'/New'} className="link btn btn-success" >Nuevo Paciente</NavLink>
      </nav>
    )
}