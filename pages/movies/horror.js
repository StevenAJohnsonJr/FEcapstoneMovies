/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllHorrorMovies } from '../../ApiCalls/MovieApiCalls';
import HorrorCard from '../../components/Cards/HorrorMovieCards';

function HorrorMoviePage() {
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getHorror = () => {
        getAllHorrorMovies().then(setHorrorMovies);
    };

    useEffect(() => {
        getHorror();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredHorrorMovies = horrorMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                <input
                    type="text"
                    placeholder="Search Horror Movies"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginTop: '10px', padding: '5px' }}
                />
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                {filteredHorrorMovies.map((movie) => (
                    <HorrorCard key={movie.id} MovieObj={movie} />
                ))}
            </div>
        </div>
    );
}

export default HorrorMoviePage;


