import './navbar.css';
import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='navbar'>
            <div>
                <Link to="/portfolio">
                    <div className='sudoLogo'></div>
                </Link>
            </div>
            <nav>
                <ul className={click ? "mobile" : "not-mobile"} style={{listStyleType: 'none'}}>
                    <li>
                        <NavLink to="/portfolio/about" className={({isActive}) => (isActive ? "nav-item-active" : "nav-item")}>
                            ABOUT ME
                        </NavLink>
                    </li>
                    <li>
                        <a href='/portfolio/#scrollwork' className='nav-item'>
                            WORKS
                        </a>
                    </li>
                    <li>
                        <NavLink to="/portfolio/artworks" className={({isActive}) => (isActive ? "nav-item-active" : "nav-item")}>
                            ARTWORKS
                        </NavLink>
                    </li>
                    <li>
                        <a href='mailto:ayushvarshney0407@gmail.com' className='nav-item'>
                            CONTACT ME
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;