/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllFamilyMovies } from '../../ApiCalls/MovieApiCalls';
import FamilyCard from '../../components/Cards/FamilyMovieCards';


function FamilyMoviePage() {
    const [familyMovies, setFamilyMovie] = useState([]);
    const getAllFamily = () => {
        getAllFamilyMovies ().then(setFamilyMovie);
    };
    useEffect(() => {
        getAllFamily();
        console.warn(familyMovies)
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
                {familyMovies?.map((movie) => (
                    <FamilyCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default FamilyMoviePage;