/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ActionCard from '../../components/Cards/ActionMovieCards';
import { getAllActionMovies } from '../../ApiCalls/MovieApiCalls';

function ActionMoviePage() {
    const [actionMovies, setActionMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllAction = () => {
        getAllActionMovies().then(setActionMovies);
    };

    useEffect(() => {
        getAllAction();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredActionMovies = actionMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="actionMovie">
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Action Movies</h1>
                <input
                    type="text"
                    placeholder="Search Action Movies"
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
                {filteredActionMovies.map((movie) => (
                    <ActionCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
            </div>
        </>
    );
}

export default ActionMoviePage;
