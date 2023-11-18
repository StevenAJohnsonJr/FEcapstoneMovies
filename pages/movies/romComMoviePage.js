/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllRomComMovies } from '../../ApiCalls/MovieApiCalls';
import RomComCard from '../../components/Cards/RomComCards';


function RomComMoviePage() {
    const [romComMovies, setRomComMovie] = useState([]);
    const getRomCom = () => {
        getAllRomComMovies ().then(setRomComMovie);
    };
    useEffect(() => {
        getRomCom();
        console.warn(romComMovies)
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
                <h1>All Our RomCom Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {romComMovies?.map((movie) => (
                    <RomComCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default RomComMoviePage;