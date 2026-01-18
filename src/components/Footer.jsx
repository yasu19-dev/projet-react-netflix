import React from 'react'
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__socials">
                <a href="" className="footer_social"><FacebookIcon/></a>
                <a href="" className="footer_social"><InstagramIcon/></a>
                <a href="" className="footer_social"><XIcon/></a>
                <a href="" className="footer_social"><YouTubeIcon/></a>
            </div>
            <ul className="footer__links">
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
                <li className="footer_link">
                    <a href="">Lien footer</a>
                </li>
            </ul>
            <div className="footer_copy">
                Netflix - TOUS DROITS RÉSERVÉS
            </div>
        </div>
    </footer>
  )
}

export default Footer