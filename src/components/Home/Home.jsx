import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { Login } from '../Sesion/Login';
import { CardsListContainer } from '../CardsListContainer/CardsListContainer';

export const Home = () => {
    const { user } = useContext(UserContext);
    
    return(
        
        <>
        {(Object.keys(user).length > 0)? 
        <main>
            <CardsListContainer />
        </main> :
        < Login />
        }
        </>
    )
}
