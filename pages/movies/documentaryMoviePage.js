/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllDocMovies } from '../../ApiCalls/MovieApiCalls';
import DocCard from '../../components/Cards/DocumentaryCards';


function DocumentaryMoviePage() {
    const [documentaryMovies, setDocumentaryMovie] = useState([]);
    const getAllDocs = () => {
        getAllDocMovies().then(setDocumentaryMovie);
    };
    useEffect(() => {
        getAllDocs();
        console.warn(documentaryMovies)
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
                <h1>All Our Documentary Movies</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {documentaryMovies?.map((movie) => (
                    <DocCard MovieObj={movie} />))}
            </div>
        </>
    );
}
export default DocumentaryMoviePage;