/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import MtCard from '../../components/Cards/MtMoviecards';
import { getAllMTMovies } from '../../ApiCalls/MovieApiCalls';


function MTMoviePage() {
    const [mTMovies, setMTMovie] = useState([]);
    const getMT = () => {
        getAllMTMovies().then(setMTMovie);
    };
    useEffect(() => {
        getMT();
        console.warn(mTMovies)
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
                <h1>All Our Mystery/Thiller Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {mTMovies?.map((movie) => (
                    <MtCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default MTMoviePage;