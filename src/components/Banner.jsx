import React from 'react'
import './Banner.scss'
function Banner() {
  return (
    <header className="banner">
        <div className="banner__content">
            <h1 className="banner_title">Titre</h1>
            <p className="banner_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quos amet explicabo modi asperiores rem possimus maiores voluptatem totam sint? Quasi, necessitatibus excepturi. Cum dolorum libero corrupti eligendi, modi est!
            </p>
            <div className="banner_buttons">
                <button className="banner_button">Lecture</button>
                <button className="banner_button">Plus d'infos</button>
                
            </div>
        </div>
    </header>
  )
}

export default Banner