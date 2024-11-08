

export const Turno = ({item}) => {
    return (
        <div className="d-flex justify-content-between">
            {(item.Date == null)?
            <>
                <p>{item.Turno+1}</p>
                <input type="date" />
            </>:
            <>
                <p>Turno {item.Turno+1}, asignado:</p>
            </>
            }
        </div>
    )
}