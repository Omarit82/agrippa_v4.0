import { Link } from "react-router-dom";
import newImage from './assets/img/new.png';
import './style.css';

export const CardsListContainer = () => {

    return(
        <>
            <h2>Contenedor de turnos</h2>
            <Link to= {'/New'} ><img src={ newImage } className="new" /></Link>
        </>
    )
}