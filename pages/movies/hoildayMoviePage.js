/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllHolidayMovies } from '../../ApiCalls/MovieApiCalls';
import HolidayCard from '../../components/Cards/HolidayMovieCards';


function ActionMoviePage() {
    const [holidayMovies, setHolidayMovie] = useState([]);
    const getAllHoliday = () => {
        getAllHolidayMovies().then(setHolidayMovie);
    };
    useEffect(() => {
        getAllHoliday();
        console.warn(holidayMovies)
    }, []);
    return (
        <>

            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    // maxWidth: '100px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Action Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {holidayMovies?.map((movie) => (
                    <HolidayCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default ActionMoviePage;