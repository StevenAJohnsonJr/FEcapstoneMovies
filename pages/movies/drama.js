/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllDramaMovies } from '../../ApiCalls/MovieApiCalls';
import DramaCard from '../../components/Cards/DramaCards';

function DramaMoviePage() {
    const [dramaMovies, setDramaMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getDrama = () => {
        getAllDramaMovies().then(setDramaMovies);
    };

    useEffect(() => {
        getDrama();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDramaMovies = dramaMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dramaPage">
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Drama Movies</h1>
                <input
                    type="text"
                    placeholder="Search Drama Movies"
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
                {filteredDramaMovies.map((movie) => (
                    <DramaCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </div>
    );
}

export default DramaMoviePage;
