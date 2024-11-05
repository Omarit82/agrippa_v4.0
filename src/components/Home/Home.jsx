import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { Login } from '../Sesion/Login';
export const Home = () => {
    const { user } = useContext(UserContext);

    console.log(user);
    return(
        <>
        {(Object.keys(user).length > 0)? 
        <main>
            <h2>Aca va el main del home</h2>
        </main> :
        < Login />
        }
        </>
    )
}
