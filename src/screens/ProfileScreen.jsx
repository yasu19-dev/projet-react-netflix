import React from 'react';
// 1. On s'assure que useNavigate est importé
import { useNavigate } from 'react-router-dom'; 
import Nav from '../components/Nav';
import '../styles/ProfileScreen.scss';

function ProfileScreen({ user, onLogout }) {
    // 2. On initialise le hook de navigation
    const navigate = useNavigate();

const handleLogout = () => {
    navigate('/'); 
    setTimeout(() => {
        onLogout(); 
    }, 100); 
};

    return (
        <div className="profileScreen">
            <Nav user={user} />
            
            <div className="profileScreen__body">
                <h1>Modifier le profil</h1>
                
                <div className="profileScreen__info">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt="Avatar" 
                    />
                    
                    <div className="profileScreen__details">
                        <h2>{user?.email}</h2>
                        
                        <div className="profileScreen__plans">
                            <h3>Mon Abonnement (Netflix Standard)</h3>
                            
                            <button 
                                onClick={handleLogout}
                                className="profileScreen__signOut"
                            >
                                Se déconnecter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;