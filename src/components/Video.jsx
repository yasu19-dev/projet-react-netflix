import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Video.scss';

function Video() {
    let { id } = useParams();
    const [idMovie, setIdMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const API_KEY = "8c4bb5309d515def71959092cf93e8f5"; // REMETS TA CLÉ ICI

    // Fonction utilitaire pour trouver le bon trailer dans la liste
    const findTrailer = (videos) => {
        // 1. On cherche un "Trailer" officiel
        let trailer = videos.find(vid => vid.type === "Trailer" && vid.site === "YouTube");
        // 2. Si pas de Trailer, on cherche un "Teaser"
        if (!trailer) trailer = videos.find(vid => vid.type === "Teaser" && vid.site === "YouTube");
        // 3. Si rien, on prend la première vidéo YouTube qui vient
        if (!trailer) trailer = videos.find(vid => vid.site === "YouTube");
        
        return trailer;
    }

    useEffect(() => {
        async function fetchVideo() {
            setLoading(true);
            try {
                // TENTATIVE 1 : On essaie l'URL pour les FILMS (/movie/)
                // On demande Français (fr) ET Anglais (en)
                const urlMovie = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=fr-FR&include_video_language=fr,en`;
                
                let response = await axios.get(urlMovie);
                let trailer = findTrailer(response.data.results);

                // Si on a trouvé un trailer de film, on s'arrête là
                if (trailer) {
                    setIdMovie(trailer.key);
                } else {
                    // TENTATIVE 2 : Si pas de trailer de film, on lance une erreur pour passer au catch
                    // Ou on vérifie si la liste est vide, cela signifie peut-être que c'est une série
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
                        setIdMovie(null); // Vraiment rien trouvé
                    }
                } catch (errTv) {
                    setIdMovie(null); // Ni film, ni série, ou erreur réseau
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
                    <button className="video_btn" onClick={() => window.history.back()}>Retour</button>
                </div>
            )}
        </div>
    );
}

export default Video;