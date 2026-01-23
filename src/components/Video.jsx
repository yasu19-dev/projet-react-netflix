import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Ajout de useNavigate
import axios from 'axios';
import '../styles/Video.scss';
import CloseIcon from '@mui/icons-material/Close'; // Import de l'icône

function Video() {
    let { id } = useParams();
    const navigate = useNavigate(); // Hook pour naviguer
    const [idMovie, setIdMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const API_KEY = "8c4bb5309d515def71959092cf93e8f5"; 

    // Fonction utilitaire pour trouver le bon trailer dans la liste
    const findTrailer = (videos) => {
        let trailer = videos.find(vid => vid.type === "Trailer" && vid.site === "YouTube");
        if (!trailer) trailer = videos.find(vid => vid.type === "Teaser" && vid.site === "YouTube");
        if (!trailer) trailer = videos.find(vid => vid.site === "YouTube");
        return trailer;
    }

    useEffect(() => {
        async function fetchVideo() {
            setLoading(true);
            try {
                // TENTATIVE 1 : On essaie l'URL pour les FILMS (/movie/)
                const urlMovie = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=fr-FR&include_video_language=fr,en`;
                
                let response = await axios.get(urlMovie);
                let trailer = findTrailer(response.data.results);

                if (trailer) {
                    setIdMovie(trailer.key);
                } else {
                    throw new Error("Pas un film ou pas de vidéo");
                }

            } catch (error) {
                // TENTATIVE 3 (Fallback) : C'est peut-être une SÉRIE (/tv/) ?
                console.log("Film non trouvé, essai Série TV...");
                try {
                    const urlTv = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=fr-FR&include_video_language=fr,en`;
                    const responseTv = await axios.get(urlTv);
                    const trailerTv = findTrailer(responseTv.data.results);

                    if (trailerTv) {
                        setIdMovie(trailerTv.key);
                    } else {
                        setIdMovie(null);
                    }
                } catch (errTv) {
                    setIdMovie(null);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchVideo();
    }, [id]);

    if (loading) {
        return <div className="video"><h3 style={{color:'white'}}>Chargement...</h3></div>;
    }

    return (
        <div className="video">
            {/* --- NOUVEAU BOUTON FERMER --- */}
            <button 
                className="video__close" 
                onClick={() => navigate(-1)} // Retour arrière
            >
                <CloseIcon fontSize="large" />
            </button>

            {idMovie ? (
                <iframe
                    src={`https://www.youtube.com/embed/${idMovie}?autoplay=1&mute=0`}
                    title="video"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                ></iframe>
            ) : (
                <div className="video_error">
                    <h3>Désolé, aucune bande-annonce disponible pour ce titre.</h3>
                    <button className="video_btn" onClick={() => navigate(-1)}>Retour</button>
                </div>
            )}
        </div>
    );
}

export default Video;