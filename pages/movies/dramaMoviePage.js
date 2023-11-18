/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllDramaMovies } from '../../ApiCalls/MovieApiCalls';
import DramaCard from '../../components/Cards/DramaCards';


function DramaMoviePage() {
    const [dramaMovies, setDramaMovie] = useState([]);
    const getDrama = () => {
        getAllDramaMovies ().then(setDramaMovie);
    };
    useEffect(() => {
        getDrama();
        console.warn(dramaMovies)
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
                <h1>All Our Drama Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {dramaMovies?.map((movie) => (
                    <DramaCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default DramaMoviePage;