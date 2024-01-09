/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MovieCard from '../../components/Cards/MovieCards';
import { getDirectorById, getMovieObjByDirectorId } from '../../ApiCalls/DirectorsApiCalls';

export default function orderDetails() {
    const router = useRouter();
    const [directorDetails, setDirectorsDetails] = useState({});
    const [movies, setMovies] = useState([]);
    // TODO: grab firebaseKey from url
    const { id } = router.query;
    // TODO: make call to API layer to get the data
    useEffect(() => {
        getDirectorById(id).then (setDirectorsDetails);
    }, [id]);
  
    useEffect(() => {
      getMovieObjByDirectorId (id).then(setMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="idPage">
      <div className="body2" class="c2">
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>{directorDetails.directorName}'s Movies</h1> <p style={{ marginButton: '100px' }}></p>
              <div className="CommentCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
                {movies.map((movie) => (
                  <MovieCard key={movie.directorId} MovieObj={movie} onUpdate={getMovieObjByDirectorId} />
                  ))}
                  </div>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}