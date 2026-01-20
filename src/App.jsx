import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';
import Video from './components/Video';
import requests from './config/Requests';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  // 1. ÉTAT USER : Gère l'utilisateur connecté
  const [user, setUser] = useState(() => {
     const savedUser = localStorage.getItem('netflix-user');
     return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. FONCTION LOGIN : Sauvegarde l'utilisateur
  const login = (email) => {
      const newUser = { email: email };
      setUser(newUser);
      localStorage.setItem('netflix-user', JSON.stringify(newUser));
  };

  // 3. FONCTION LOGOUT : Supprime l'utilisateur
  const logout = () => {
      setUser(null);
      localStorage.removeItem('netflix-user');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ROUTE ACCUEIL */}
          <Route path="/" element={
            <>
              <Nav user={user} /> 
              <Banner />
              <Row 
                title='Programmes originaux Netflix' 
                fetchUrl={requests.fetchNetflixOriginals}
                isPoster={true}
              />
              <Row title='Tendances actuelles' fetchUrl={requests.fetchTrending} />
              <Row title='Les mieux notés' fetchUrl={requests.fetchTopRated} />
              <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
              <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
              <Footer />
            </>
          } />

          {/* ROUTE VIDEO */}
          <Route path='/video/:id' element={<Video />} />

          {/* ROUTE LOGIN */}
          <Route path="/login" element={<LoginScreen onLogin={login} />} />

          {/* ROUTE PROFILE */}
          <Route path="/profile" element={
             user ? <ProfileScreen user={user} onLogout={logout} /> : <Navigate to="/login" />
          } />

          {/* REDIRECTION PAR DÉFAUT */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;