/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllHolidayMovies } from '../../ApiCalls/MovieApiCalls';
import HolidayCard from '../../components/Cards/HolidayMovieCards';

function HolidayMoviePage() {
    const [holidayMovies, setHolidayMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllHoliday = () => {
        getAllHolidayMovies().then(setHolidayMovies);
    };

    useEffect(() => {
        getAllHoliday();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredHolidayMovies = holidayMovies.filter((movie) =>
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
                <h1>All Our Holiday Movies</h1>
                <input
                    type="text"
                    placeholder="Search Holiday Movies"
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
                {filteredHolidayMovies.map((movie) => (
                    <HolidayCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </>
    );
}

export default HolidayMoviePage;
