import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='navbar'>
            <div>
                <Link to="/">
                    <div className='sudoLogo'></div>
                </Link>
            </div>
            <nav>
                <ul className={click ? "mobile" : "not-mobile"}>
                    <li>
                        <Link to="/about" className='nav-item'>
                            ABOUT ME
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='nav-item'>
                            WORKS
                        </Link>
                    </li>
                    <li>
                        <Link to="/artworks" className='nav-item'>
                            ARTWORKS
                        </Link>
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