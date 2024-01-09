/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllHorrorMovies } from '../ApiCalls/MovieApiCalls';
import MovieCard from './Cards/MovieCards';

const TopSlide5 = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const getAllTheHorrorMovies = () => {
    getAllHorrorMovies().then((data) => {
      setMovies(data);
    });
  };

  const onUpdate = () => {
    getAllTheHorrorMovies();
  };

  useEffect(() => {
    getAllTheHorrorMovies();
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 10,
    slidesToScroll: 2,
    margin: '0 0px',
    padding: '0px',  
  };

  return (
    <div>

        <h2>Horror Movies</h2>
        
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard MovieObj={movie} onUpdate={onUpdate} />
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default TopSlide5;