/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllComedyMovies } from '../ApiCalls/MovieApiCalls';
import MovieCard from './Cards/MovieCards';

const TopSlide1 = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const getAllTheComedyMovies = () => {
    getAllComedyMovies ().then((data) => {
      setMovies(data);
    });
  };

  const onUpdate = () => {
    getAllTheComedyMovies();
  };

  useEffect(() => {
    getAllTheComedyMovies();
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

        <h2>Comedy Movies</h2>
        
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

export default TopSlide1;