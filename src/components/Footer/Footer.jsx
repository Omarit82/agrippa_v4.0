import { Link } from 'react-router-dom'
import './style.css'

export const Footer = () => {
    return (
        <footer className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className="text-center">By Omarit 2024</h3>
            <div className='d-flex'>
                <h4 className='me-5'><Link to={'https://www.linkedin.com/in/omar-roselli'}>Linkedin</Link></h4>
                <h4><Link to={'https://www.github.com/Omarit82'}>Github</Link></h4>
            </div>
           
        </footer>
    )
}