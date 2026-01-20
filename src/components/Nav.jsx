import React, { useState, useEffect } from 'react';
import '../styles/Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

function Nav({ user }) {
    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const transitionNav = () => {
            window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
        };
        window.addEventListener('scroll', transitionNav);
        return () => window.removeEventListener('scroll', transitionNav);
    }, []);

    const handleClick = () => {
        setToggleMenu(!toggleMenu);
    }

    const handleAvatarClick = () => {
        if (user) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    }
    
  return (
    <div className={`nav ${navBlack || toggleMenu ? 'nav--black' : 'nav--transparent'} ${toggleMenu && 'show'}`}>
        <button className='nav_burger' onClick={handleClick}>
            <MenuIcon />
        </button>
        
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
            alt="Netflix" 
            className='nav_logo' 
            onClick={() => navigate('/')} 
            style={{cursor: 'pointer'}}
        />

        <nav className='nav_links'>
            <a href="/" onClick={(e)=>{e.preventDefault(); navigate('/')}} className="nav__link">Accueil</a>
            <a href="/" className="nav__link">Séries</a>
            <a href="/" className="nav__link">Films</a>
        </nav>

        <div className="nav_actions">
            <a href="/" className="nav_action"><SearchIcon/></a>
            <span className="nav_action">DIRECT</span>
            <a href="/" className="nav_action"><CardGiftcardIcon/></a>
            <a href="/" className="nav_action"><NotificationsIcon/></a>
            
            <div className="nav_action" onClick={handleAvatarClick}>
                <img 
                    src={
                        user 
                        ? "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                    }
                    alt="avatar" 
                    className="nav_avatar"
                    style={{cursor: 'pointer', borderRadius: '4px', width: '30px', height: '30px', objectFit: 'cover'}} 
                />
            </div>
        </div>
    </div>
  )
}

export default Nav;