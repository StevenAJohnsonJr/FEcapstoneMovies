/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllHorrorMovies } from '../../ApiCalls/MovieApiCalls';
import HorrorCard from '../../components/Cards/HorrorMovieCards';

function HorrorMoviePage() {
    const [horrorMovies, setHorrorMovie] = useState([]);

    const getHorror = () => {
        getAllHorrorMovies().then(setHorrorMovie);
    };

    useEffect(() => {
        getHorror();
        console.warn(horrorMovies);
    }, []);

    return (
        <div style={{
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt1pRk6_53iZ1t6Y4g_i9LTq_rcamLnET2w&usqp=CAU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content horizontally
        }}>
            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    padding: '7px',
                    color: '#ffffff',
                }}
            >
                <h1>All Our Horror Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                {horrorMovies?.map((movie) => (
                    <HorrorCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </div>
    );
}

export default HorrorMoviePage;


