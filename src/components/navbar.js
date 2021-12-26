import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
import { FaBars, FaTimes} from "react-icons/fa";
import { Button } from './Button'
import './navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
         <div className="navbar">
             <div className="navbar-container container">
                  <Link to='/' className="navbar-logo">
                      elda();
                  </Link>
                 <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li>
                         <Link to='/'>
                         <button className='nav-item'>
                             Home
                         </button>
                         </Link>
                     </li>
                     <li>
                         <Link to='/projects'>
                         <button className='nav-item'>
                             Projects
                         </button>
                         </Link>
                     </li>
                     <li>
                         <Link to='/blog'>
                         <button className='nav-item'>
                             Blog
                         </button>
                         </Link>
                     </li>
                     <li>
                         <Link to='/about'>
                         <button className='nav-item'>
                             About
                         </button>
                         </Link>
                     </li>
                 </ul>
             </div>
         </div>
        </>
    )
}

export default Navbar