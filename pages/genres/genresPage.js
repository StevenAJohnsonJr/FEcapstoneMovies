/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import GenreCard from '../../components/GenreCards.js/GenreCard';
import { getAllGenres } from '../../ApiCalls/GenreApiCalls';


function GenreMoviePage() {
    const [genreMovies, setGenreMovie] = useState([]);
    const getAllGenre = () => {
        getAllGenres().then(setGenreMovie);
    };
    useEffect(() => {
        getAllGenre();
        console.warn(genreMovies)
    }, []);
    return (
        <div className="genrePage">

            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    // maxWidth: '100px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Movie Genres</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {genreMovies?.map((genre) => (
                    <GenreCard GenreObj={genre} />))}
            </div>            
        </div>
    );
}
export default GenreMoviePage;