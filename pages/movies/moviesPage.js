/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../ApiCalls/MovieApiCalls';
import MovieScrollCarousel from '../../components/Cards/MovieScrollCarousel';
import MovieCard from '../../components/Cards/MovieCards';

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllTheMovies = () => {
        getAllMovies().then(setMovies);
    };

    useEffect(() => {
        getAllTheMovies();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Movies</h1>
                <input
                    type="text"
                    placeholder="Search Movies"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginTop: '10px', padding: '5px' }}
                />
            </div>

            {/* Include the MovieScrollCarousel component */}
            <MovieScrollCarousel movies={filteredMovies} />

            <div
                className="flex-wrap"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default MoviePage;
