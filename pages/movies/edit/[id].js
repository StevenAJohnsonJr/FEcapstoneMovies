/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMoviesById } from '../../../ApiCalls/MovieApiCalls';
import MovieForm from '../../../components/Forms/MovieForm';

export default function EditMovies() {
  const [editMovie, setEditMovie] = useState({});
  const router = useRouter();
  // TODO: grab the id
  const { id } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getMoviesById(id).then(x => setEditMovie(x));
  }, [id]);
  // TODO: pass object to form
  return (<MovieForm movieDetails={editMovie} />);
}
