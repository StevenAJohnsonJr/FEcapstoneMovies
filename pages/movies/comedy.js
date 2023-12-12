/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllComedyMovies } from '../../ApiCalls/MovieApiCalls';
import ComedyCard from '../../components/Cards/ComedyMovieCards';

function ComedyMoviePage() {
    const [comedyMovies, setComedyMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllComedy = () => {
        getAllComedyMovies().then(setComedyMovies);
    };

    useEffect(() => {
        getAllComedy();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredComedyMovies = comedyMovies.filter((movie) =>
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
                <h1>All Our Comedy Movies</h1>
                <input
                    type="text"
                    placeholder="Search Comedy Movies"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginTop: '10px', padding: '5px' }}
                />
            </div>
            <div
                className="flex-wrap"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                {filteredComedyMovies.map((movie) => (
                    <ComedyCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default ComedyMoviePage;
