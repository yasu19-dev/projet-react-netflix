import React, { useEffect, useState } from 'react'
import './Banner.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../config/Requests';
import axios from 'axios';

function Banner() {

    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
        
        setMovie(
            request.data.results[
                Math.floor(Math.random()* request.data.results.length -1)
            ]
        );
        }
        fetchData();
    },[]);

    function truncateText(string, n){
       if (!string) return "";
       return string.length > n ? string.substr(0, n - 1) + "..." : string;
        
    }
    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }
    console.log(movie);
  return (
    <header className="banner" style={bannerStyle}>
        <div className="banner__content">
            <h1 className="banner_title">{movie?.name || movie?.original_name || movie?.original_title || movie?.title}</h1>
            <p className="banner_description">
                {truncateText(movie?.overview, 100)}
            </p>
            <div className="banner_buttons">
                <button className="banner_button banner_button--play"><PlayArrowIcon/> Lecture</button>
                <button className="banner_button"><HelpOutlineIcon/> Plus d'infos</button>
                
            </div>
        </div>
    </header>
  )
}

export default Banner