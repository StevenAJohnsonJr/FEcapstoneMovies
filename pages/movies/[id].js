/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Col, Row, Button, CloseButton } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMovie, getMoviesById } from '../../ApiCalls/MovieApiCalls';

export default function MovieDetails() {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = router.query;

  const deleteThisMovie = () => {
    if (window.confirm(`Delete ${movieDetails.id}?`)) {
        deleteMovie(movieDetails.id)
        .then(() => router.push('/movies/moviesPage'))
        .catch((error) => console.error('Error deleting movie:', error));
    }
  };

  useEffect(() => {
    getMoviesById(id)
      .then((data) => {
        setMovieDetails(data);
        console.warn('Movie details:', data);
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="center" src={movieDetails.imgUrl} />
        </Card>
      </div>
      <div id="movieContainer">
        <Card className="e-card e-card-horizontal" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '14rem' }}>
          <Card.Body>
            <Row>
              <Col sm>
                <Card.Title>{movieDetails.title}</Card.Title>
              </Col>
              <Col sm>
                <Card.Text>Run Time: {movieDetails.length}</Card.Text>
              </Col>
              <Col sm>
                <Card.Subtitle className="mb-2 text-muted">{movieDetails.rated}</Card.Subtitle>
              </Col>
              <Col sm>
                <Card.Text>Rating: {movieDetails.rating}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Card.Text>Description: {movieDetails.description}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Card.Text>Streaming On: {movieDetails.steamingOn}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <CloseButton variant="danger" onClick={deleteThisMovie} className="m-2">
            {/* Delete */}
          </CloseButton>
          <Link href={`/movies/edit/${movieDetails.id}`} passHref>
            <Button variant="primary" className="btn btn-outline-secondary">
              Edit
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
