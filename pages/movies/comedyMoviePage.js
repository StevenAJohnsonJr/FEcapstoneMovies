/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import ActionCard from '../../components/Cards/ActionMovieCards';
import { getAllComedyMovies } from '../../ApiCalls/MovieApiCalls';
import ComedyCard from '../../components/Cards/ComedyMovieCards';


function ComedyMoviePage() {
    const [comedyMovies, setComedyMovie] = useState([]);
    const getAllComedy = () => {
        getAllComedyMovies ().then(setComedyMovie);
    };
    useEffect(() => {
        getAllComedy();
        console.warn(comedyMovies)
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
                <h1>All Our Comedy Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {comedyMovies?.map((movie) => (
                    <ComedyCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default ComedyMoviePage;