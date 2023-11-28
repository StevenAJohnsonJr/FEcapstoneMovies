/* eslint-disable */
import React, { useState } from 'react';
import { clientCredentials } from '../../utils/client';
const endpoint = clientCredentials.databaseURL;

const RandomMovie = () => {
  const [randomMovie, setRandomMovie] = useState('');

  const generateRandomMovie = async () => {
    try {
      const response = await fetch(`${endpoint}/randommovie`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch random movie');
      }

      const data = await response.json();
      const selectedMovie = Object.values(data)[0];
      setRandomMovie(selectedMovie);
    } catch (error) {
      console.error('Error fetching data from custom API', error);
    }
  };

  return (
    <div className="App">
      <h1>Random Movie Generator</h1>
      <button onClick={generateRandomMovie}>Generate Random Movie</button>
      {randomMovie && <p>Random Movie: {randomMovie}</p>}
    </div>
  );
};

export default RandomMovie;
