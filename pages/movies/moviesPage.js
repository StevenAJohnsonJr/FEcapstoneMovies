/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../../ApiCalls/MovieApiCalls';
import MovieCard from '../../components/Cards/MovieCards';


function MoviePage() {
    const [movies, setMovie] = useState([]);
    const getAllTheMovies = () => {
        getAllMovies().then(setMovie);
    };
    useEffect(() => {
        getAllTheMovies();
        console.warn(movies)
    }, []);
    return (
        <>

            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    // maxWidth: '100px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {movies?.map((movie) => (
                    <MovieCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default MoviePage;