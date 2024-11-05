import { Link } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';


export const Header = () => {
    const { user,handleLogout } = useContext(UserContext);
   
    return (
        
        <header>
            <Link to='/'className='col'>
                <h1 className='text-center headline mb-0'>AgrippaKinesio</h1>
            </Link>
            { (Object.keys(user).length > 0) && 
            <div className='mb-0 d-flex justify-content-end'>
                <div className='text-center'>
                    <h3 className='me-2 user'>{user.user.displayName}</h3> 
                    <Link to = {'/'} onClick={handleLogout} className='mt-1'>Logout</Link>
                </div>
            </div>
            }
        </header>
        
    )
} 