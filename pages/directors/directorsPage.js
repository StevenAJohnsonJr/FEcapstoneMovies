/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllDirector } from '../../ApiCalls/DirectorsApiCalls';
import DirectorCard from '../../components/DirectorCards/DirectorsCards';


function DirectorsMoviePage() {
    const [directors, setDirectors] = useState([]);
    const getAllDirectors = () => {
        getAllDirector ().then(setDirectors);
    };
    useEffect(() => {
        getAllDirectors();
        console.warn(directors)
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
                <h1>All Our Movie Directors</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {directors?.map((director) => (
                    <DirectorCard dirObj={director} />))}
            </div>
        </>
    );
}
export default DirectorsMoviePage;