/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import ActionCard from '../../components/Cards/ActionMovieCards';
import { getAllActionMovies } from '../../ApiCalls/MovieApiCalls';


function ActionMoviePage() {
    const [actionMovies, setActionMovie] = useState([]);
    const getAllAction = () => {
        getAllActionMovies().then(setActionMovie);
    };
    useEffect(() => {
        getAllAction();
        console.warn(actionMovies)
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
                {actionMovies?.map((movie) => (
                    <ActionCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default ActionMoviePage;