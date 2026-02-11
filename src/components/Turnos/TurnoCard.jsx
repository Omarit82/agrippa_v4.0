

export const TurnoCard = ({turno}) => {
    let fecha = turno.dia.toDate().toLocaleDateString()
    
    
    return (
        <div className="card p-3 m-3">
            <h4>{turno.paciente.name}, {turno.paciente.lastName}</h4>
            <h5>{turno.horario} - {fecha}</h5>
        </div>
    )
}