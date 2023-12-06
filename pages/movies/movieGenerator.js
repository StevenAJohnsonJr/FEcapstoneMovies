/* eslint-disable */
import React, { useState } from 'react';
import { clientCredentials } from '../../utils/client';
import MovieCard from '../../components/Cards/MovieCards';

const endpoint = clientCredentials.databaseURL;

const RandomMovie = () => {
  const [randomMovie, setRandomMovie] = useState({});
  const [buttonPressed, setButtonPressed] = useState(false);

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
        throw new Error('Failed to fetch a random movie');
      }

      const data = await response.json();
      console.log(data);
      setRandomMovie(data);
      setButtonPressed(true);
    } catch (error) {
      console.error('Error fetching data from custom API', error);
    }
  };

  return (
    <div className="App">
      <h1>Random Movie Generator</h1>
      <button onClick={generateRandomMovie}>Generate Random Movie</button>
      {buttonPressed && randomMovie && (
        <>
          <p>Random Movie: {randomMovie.title}</p>
          <MovieCard MovieObj={randomMovie} />
        </>
      )}
    </div>
  );
};

export default RandomMovie;
