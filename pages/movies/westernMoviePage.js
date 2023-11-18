/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllWesternMovies } from '../../ApiCalls/MovieApiCalls';
import WesternCard from '../../components/Cards/WesternMovieCards';


function WesternMoviePage() {
    const [westernMovies, setWesternMovie] = useState([]);
    const getAllAction = () => {
        getAllWesternMovies().then(setWesternMovie);
    };
    useEffect(() => {
        getAllAction();
        console.warn(westernMovies)
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
                {westernMovies?.map((movie) => (
                    <WesternCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default WesternMoviePage;