import React, { useEffect, useState } from 'react'
import './Banner.scss';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../config/Requests';
import axios from 'axios';
import QuickView from './QuickView';
import { Link } from 'react-router';

function Banner() {

    const [movie, setMovie] = useState([]);
    const [popup, setPopUp] = useState(false);

    function handlePopup(){
        popup ? setPopUp(false) : setPopUp(true);
    }
    
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
    // console.log(movie);
    console.log(popup)
  return (
    <>
    <header className="banner" style={bannerStyle}>
        <div className="banner__content">
            <h1 className="banner_title">{movie?.name || movie?.original_name || movie?.original_title || movie?.title}</h1>
            <p className="banner_description">
                {truncateText(movie?.overview, 100)}
            </p>
            <div className="banner_buttons">
                <Link to={`/video/${movie?.id}`}>
                    <button className="banner_button banner_button--play"><PlayArrowIcon/> Lecture</button>
                </Link>
                    <button className="banner_button" onClick={handlePopup} ><HelpOutlineIcon/> Plus d'infos</button> 
            </div>
        </div>
    </header>
    <QuickView 
            bannerStyle = {bannerStyle} 
            movie={movie}  
            popup={handlePopup} 
            popupStatut={popup}
    />
    </>
        
    
  )
}

export default Banner