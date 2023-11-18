/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import {  getAllHorrorMovies } from '../../ApiCalls/MovieApiCalls';
import HorrorCard from '../../components/Cards/HorrorMovieCards';


function HorrorMoviePage() {
    const [horrorMovies, setHorrorMovie] = useState([]);
    const getHorror = () => {
        getAllHorrorMovies ().then(setHorrorMovie);
    };
    useEffect(() => {
        getHorror();
        console.warn(horrorMovies)
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
                <h1>All Our Horror Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {horrorMovies?.map((movie) => (
                    <HorrorCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default HorrorMoviePage;