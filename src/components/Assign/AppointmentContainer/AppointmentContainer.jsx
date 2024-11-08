import { useContext, useEffect, useState } from "react";
import { PatientContext } from "../../../context/patientContext";

export const AppointmentContainer = () => {
    const { patients } = useContext(PatientContext);
    const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
        const aux = [];
        patients.map((item) => (
            console.log()
        ))
    },[])


    return(
        <>

        </>
    )
}