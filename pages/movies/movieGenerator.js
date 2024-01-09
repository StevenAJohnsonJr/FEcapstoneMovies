/* eslint-disable */
import React, { useState } from 'react';
import { clientCredentials } from '../../utils/client';
import MovieCard from '../../components/Cards/MovieCards';
import RandomCard from '../../components/Cards/RandomMovie';
import { Button } from 'react-bootstrap';  // Import the Button component from react-bootstrap
// import './RandomMovie.css'; // Import your CSS file

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
    <div className="App" style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#b0b0b0' }}>Random Movie Generator</h1>
      <Button variant="outline-warning" style={{ marginBottom: '30px' }} onClick={generateRandomMovie}>
        Generate Random Movie
      </Button>
      {buttonPressed && randomMovie && randomMovie.title ? (
        <div className="centered-content">
          <h1 style={{ color: '#b0b0b0' }}>Random Movie: {randomMovie.title}</h1>
          {/* Pass style prop to RandomCard */}
          <RandomCard MovieObj={randomMovie} style={{ width: '18rem' }} />
        </div>
      ) : null}
    </div>
  );
};

export default RandomMovie;

