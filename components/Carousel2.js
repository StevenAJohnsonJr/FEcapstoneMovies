/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { getAllMovies } from '../ApiCalls/MovieApiCalls';
import MovieCard from './Cards/MovieCards';


const TopSlide = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { query } = router;
//   const { firebaseKey } = router.query;

  const getAllTheMovies = () => {
    getAllMovies ().then((data) => {
      setMovies(data);
    });
  };

  const onUpdate = () => {
    getAllTheMovies();
  };

  useEffect(() => {
    getAllTheMovies();
  }, [query.id]);

  const styles = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // Number of cards to show in a row
    slidesToScroll: 1,
  };

  return (
    <>
      <Link href="/movies/new" passHref>
        <Button variant="dark">Click To Add movie If You Do Not See What You Are Looking For</Button>
      </Link>
      <Slider {...styles}>
        {movies.map((movie) => (
          <div key={movie.id}>
            {/* <Card> */}
              <MovieCard MovieObj={movie} onUpdate={onUpdate} />
            {/* </Card> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopSlide;