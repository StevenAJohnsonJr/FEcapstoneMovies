/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllFamilyMovies } from '../../ApiCalls/MovieApiCalls';
import FamilyCard from '../../components/Cards/FamilyMovieCards';

function FamilyMoviePage() {
    const [familyMovies, setFamilyMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllFamily = () => {
        getAllFamilyMovies().then(setFamilyMovies);
    };

    useEffect(() => {
        getAllFamily();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFamilyMovies = familyMovies.filter((movie) =>
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
                <h1>All Our Family Movies</h1>
                <input
                    type="text"
                    placeholder="Search Family Movies"
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
                {filteredFamilyMovies.map((movie) => (
                    <FamilyCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default FamilyMoviePage;
