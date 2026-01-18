import React from 'react';
import './Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Nav() {
  return (
    <div className='nav nav--black '>
        <button className='nav_burger'>
            <MenuIcon />
        </button>
        <img src="./images/logo.png" alt="Netflix" className='nav_logo' />
        <nav className='nav_links'>
            <a href="" className="nav_link">Accueil</a>
            <a href="" className="nav_link">Séries</a>
            <a href="" className="nav_link">Films</a>
        </nav>
        <div className="nav_action">
            <a href="" className="nav_action"><SearchIcon/></a>
            <a href="" className="nav_action">DIRECT</a>
            <a href="" className="nav_action"><CardGiftcardIcon/></a>
            <a href="" className="nav_action"><NotificationsIcon/></a>
            <a href="" className="nav_action">
                <img src="./images/avatar.jpg" alt="avatar" width='70' />
            </a>
        </div>

    </div>
  )
}

export default Nav