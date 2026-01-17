import React from 'react'
import './Nav.scss'
function Nav() {
  return (
    <div className='nav show nav--black '>
        <button className='nav_burger'>---</button>
        <img src="./images/logo.png" alt="Netflix" className='nav_logo' />
        <nav className='nav_links'>
            <a href="" className="nav_link">Accueil</a>
            <a href="" className="nav_link">Séries</a>
            <a href="" className="nav_link">Films</a>
        </nav>
        <div className="nav_action">
            <a href="" className="nav_action">Search</a>
            <a href="" className="nav_action">DIRECT</a>
            <a href="" className="nav_action">Gift</a>
            <a href="" className="nav_action">Notif</a>
            <a href="" className="nav_action">
                <img src="./images/avatar.jpg" alt="avatar" width='70' />
            </a>
        </div>

    </div>
  )
}

export default Nav