/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllRomComMovies } from '../../ApiCalls/MovieApiCalls';
import RomComCard from '../../components/Cards/RomComCards';

function RomComMoviePage() {
    const [romComMovies, setRomComMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getRomCom = () => {
        getAllRomComMovies().then(setRomComMovies);
    };

    useEffect(() => {
        getRomCom();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRomComMovies = romComMovies.filter((movie) =>
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
                <h1>All Our RomCom Movies</h1>
                <input
                    type="text"
                    placeholder="Search RomCom Movies"
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
                {filteredRomComMovies.map((movie) => (
                    <RomComCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default RomComMoviePage;
