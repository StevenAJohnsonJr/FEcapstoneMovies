/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllSciFiMovies } from '../../ApiCalls/MovieApiCalls';
import ActionCard from '../../components/Cards/ActionMovieCards';

function SciFiMoviePage() {
    const [sciFiMovies, setSciFiMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllSciFi = () => {
        getAllSciFiMovies().then(setSciFiMovies);
    };

    useEffect(() => {
        getAllSciFi();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSciFiMovies = sciFiMovies.filter((movie) =>
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
                <h1>All Our Sci-Fi Movies</h1>
                <input
                    type="text"
                    placeholder="Search Sci-Fi Movies"
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
                {filteredSciFiMovies.map((movie) => (
                    <ActionCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default SciFiMoviePage;
