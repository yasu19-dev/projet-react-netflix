import React, { useState } from 'react';
import './Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Nav() {
    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };
    useState(() => {
        document.addEventListener('scroll', transitionNav);
    });
    const handleClick = () => {
        // console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }
    // console.log(navBlack)
    
  return (
    <div className={`nav ${navBlack || toggleMenu ? 'nav--black' : 'nav--transparent'} ${toggleMenu && 'show'}`}>
        <button className='nav_burger' onClick={handleClick}>
            <MenuIcon />
        </button>
        <img src="./images/logo.png" alt="Netflix" className='nav_logo' />
        <nav className='nav_links'>
            <a href="" className="nav__link">Accueil</a>
            <a href="" className="nav__link">Séries</a>
            <a href="" className="nav__link">Films</a>
        </nav>
        <div className="nav_actions">
            <a href="" className="nav_action"><SearchIcon/></a>
            <a href="" className="nav_action">DIRECT</a>
            <a href="" className="nav_action"><CardGiftcardIcon/></a>
            <a href="" className="nav_action"><NotificationsIcon/></a>
            <a href="" className="nav_action">
                <img src="./images/avatar.jpg" alt="avatar" width='50' />
            </a>
        </div>
        

    </div>
  )
}

export default Nav