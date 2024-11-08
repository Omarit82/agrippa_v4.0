
import { Navegador } from "../Navegador/Navegador"
import './style.css';
import { AppointmentContainer } from "./AppointmentContainer/AppointmentContainer";
import { NewAssignment } from "./NewAssignment/NewAssignment";


export const Assign = () => {
   
   

    
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
                <h3 className="text-center">Pacientes: </h3>
                    <NewAssignment />
                </div>
                
            </div>
        </main>
    )
}