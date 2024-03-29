/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllMovies } from '../ApiCalls/MovieApiCalls';
import MovieCard from './Cards/MovieCards';

const TopSlide = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const getAllTheMovies = () => {
    getAllMovies().then((data) => {
      setMovies(data);
    });
  };

  const onUpdate = () => {
    getAllTheMovies();
  };

  useEffect(() => {
    getAllTheMovies();
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
      <Link href="/movies/new" passHref>
        <Button variant="btn btn-warning" style={{ marginBottom: '30px' }}>Click To Add a Movie If You Do Not See What You Are Looking For</Button>
      </Link>
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

export default TopSlide;
