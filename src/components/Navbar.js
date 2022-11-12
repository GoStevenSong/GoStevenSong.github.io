import React, {useState} from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import Logo1 from "../Asset/Logo1.png";

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo"  onClick={closeMobileMenu}>
                    <img src={Logo1} alt="logo" style={{height:50, margin:0}}/>
                    <h6>Steven Song</h6>
                </Link>
                <div className="navbar-menu-icon"  onClick={handleClick}>
                    {click ? <ClearIcon style={{fontSize:30}}/> : <ReorderIcon style={{fontSize:30}} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div> 
    
        </div>
    )
}

export default Navbar
