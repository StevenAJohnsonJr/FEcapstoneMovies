/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllDirector } from '../../ApiCalls/DirectorsApiCalls';
import DirectorCard from '../../components/DirectorCards/DirectorsCards';


function DirectorsMoviePage() {
    const [directors, setDirectors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllDirectors = () => {
        getAllDirector ().then(setDirectors);
    };
    useEffect(() => {
        getAllDirectors();
        console.warn(directors)
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDirectors = directors.filter((director) =>
        director.directorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="directorPage">
<div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    margin: '0 auto',
                }}
            >
                <h1>All Our Film Directors</h1>
                <input
                    type="text"
                    placeholder="Search Your Favorite Director"
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
               
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {filteredDirectors?.map((director) => (
                    <DirectorCard dirObj={director} />))}
            </div>
        </div>
    );
}
export default DirectorsMoviePage;

