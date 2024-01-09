/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllWesternMovies } from '../../ApiCalls/MovieApiCalls';
import WesternCard from '../../components/Cards/WesternMovieCards';

function WesternMoviePage() {
    const [westernMovies, setWesternMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllWestern = () => {
        getAllWesternMovies().then(setWesternMovies);
    };

    useEffect(() => {
        getAllWestern();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredWesternMovies = westernMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="Western">
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Western Movies</h1>
                <input
                    type="text"
                    placeholder="Search Western Movies"
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
                {filteredWesternMovies.map((movie) => (
                    <WesternCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </div>
    );
}

export default WesternMoviePage;
