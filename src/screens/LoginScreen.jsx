import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginScreen.scss'; // Tu peux réutiliser le CSS du Login précédent ou en faire un simple

function LoginScreen({ onLogin }) {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length > 0) {
            // On appelle la fonction de connexion passée par App.js
            onLogin(email);
            navigate('/'); // On retourne à l'accueil
        }
    };

    return (
        <div className="loginScreen" style={{height: '100vh', background: '#111', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{padding: '50px', background: 'black', borderRadius: '10px'}}>
                <h2 style={{marginBottom: '20px'}}>S'identifier</h2>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{padding: '10px', width: '300px'}}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Mot de passe (fictif)" 
                        style={{padding: '10px'}}
                    />
                    <button type="submit" style={{padding: '10px', background: '#e50914', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}>
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;