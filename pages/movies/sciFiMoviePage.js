/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import ActionCard from '../../components/Cards/ActionMovieCards';
import { getAllSciFiMovies } from '../../ApiCalls/MovieApiCalls';


function SciFiMoviePage() {
    const [sciFiMovies, setSciFiMovie] = useState([]);
    const getAllSciFi = () => {
        getAllSciFiMovies ().then(setSciFiMovie);
    };
    useEffect(() => {
        getAllSciFi();
        console.warn(sciFiMovies)
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
                {sciFiMovies.map((movie) => (
                    <ActionCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default SciFiMoviePage;