/* eslint-disable */
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCards';

const MovieScrollCarousel = ({ movies, filterCriterion }) => {
    const filteredMovies = movies.filter(movie => {
        return movie.genre === filterCriterion;
        // Add your actual filtering criteria here
      });
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
    {filteredMovies.map(movie => (
      <div key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
};;

export default MovieScrollCarousel;
