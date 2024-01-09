/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAllDocMovies } from '../../ApiCalls/MovieApiCalls';
import DocCard from '../../components/Cards/DocumentaryCards';

function DocumentaryMoviePage() {
    const [documentaryMovies, setDocumentaryMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllDocs = () => {
        getAllDocMovies().then(setDocumentaryMovies);
    };

    useEffect(() => {
        getAllDocs();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDocumentaryMovies = documentaryMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="docMovie">
            <div
                className=""
                style={{
                    backgroundImage: 'url("")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    className="text-center d-flex flex-column justify-content-center align-content-center"
                    style={{
                        height: '22vh',
                        padding: '7px',
                        margin: '0 auto',
                    }}
                >
                    <h1>All Our Documentary Movies</h1>
                    <input
                        type="text"
                        placeholder="Search Documentary Movies"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ marginTop: '10px', padding: '5px' }}
                    />
                </div>
                <div
                    className="flex-wrap"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    {filteredDocumentaryMovies.map((movie) => (
                        <DocCard key={movie.id} MovieObj={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DocumentaryMoviePage;