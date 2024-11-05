import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1 className='text-center headline'>AgrippaKinesio</h1>
            </Link>
        </header>
        
    )
} 