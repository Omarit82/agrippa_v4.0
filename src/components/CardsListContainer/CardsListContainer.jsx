import { Link, useParams } from "react-router-dom";

import './style.css';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const CardsListContainer = () => {
     

    return(
        <>
            <h2 className="text-center">Contenedor de turnos</h2>
            
            <div>
                
            </div>
        </>
    )
}