/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllMTMovies } from '../../ApiCalls/MovieApiCalls';
import MtCard from '../../components/Cards/MtMoviecards';

function MTMoviePage() {
    const [mTMovies, setMTMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getMT = () => {
        getAllMTMovies().then(setMTMovies);
    };

    useEffect(() => {
        getMT();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMTMovies = mTMovies.filter((movie) =>
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
                <h1>All Our Mystery/Thriller Movies</h1>
                <input
                    type="text"
                    placeholder="Search Mystery/Thriller Movies"
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
                {filteredMTMovies.map((movie) => (
                    <MtCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default MTMoviePage;
