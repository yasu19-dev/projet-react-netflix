import React, { useEffect, useState } from 'react';
import './Row.scss';
import axios from 'axios';

function Row({ title, fetchUrl, isPoster }) {
    const [movies, setMovies] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2 className="row_title">{title}</h2>
            <div className="row_images">
                {movies.map((movie) => {
                    const imagePath = isPoster ? movie.poster_path : movie.backdrop_path;

                    if (!imagePath) return null;

                    return (
                        <img
                            key={movie.id}
                            src={`${baseUrl}${imagePath}`}
                            className={`row_image ${isPoster && "row_imagePoster"}`} 
                            alt={movie?.name || movie?.title || movie?.original_title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Row;