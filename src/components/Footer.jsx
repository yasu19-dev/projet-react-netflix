import React from 'react';
import '../styles/Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // Ou TwitterIcon selon ta version de MUI
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    // Liste des liens réels du footer Netflix
    const footerLinks = [
        "Audiodescription",
        "Centre d'aide",
        "Cartes cadeaux",
        "Presse",
        "Relations Investisseurs",
        "Recrutement",
        "Conditions d'utilisation",
        "Confidentialité",
        "Informations légales",
        "Préférences de cookies",
        "Mentions légales",
        "Nous contacter",
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, label: "Facebook" },
        { icon: <InstagramIcon />, label: "Instagram" },
        { icon: <XIcon />, label: "Twitter" },
        { icon: <YouTubeIcon />, label: "Youtube" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                {/* Icônes Réseaux Sociaux */}
                <div className="footer__socials">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index} 
                            href="/" 
                            className="footer_social" 
                            aria-label={social.label} 
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Liste des liens générée dynamiquement */}
                <ul className="footer__links">
                    {footerLinks.map((link, index) => (
                        <li className="footer_link" key={index}>
                            <a href="/">{link}</a>
                        </li>
                    ))}
                </ul>

                {/* Copyright */}
                <div className="footer_copy">
                    &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
                </div>
            </div>
        </footer>
    );
}

export default Footer;