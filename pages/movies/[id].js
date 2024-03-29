/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Col, Row, Button, CloseButton } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMovie, getMoviesById } from '../../ApiCalls/MovieApiCalls';

export default function MovieDetails() {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState({});
  const [showVideo, setShowVideo] = useState(false); // State to manage the visibility of the video
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
    <div className="movieDetails">
      <Row className="movieDetails2">
        <Col sm={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="center" src={movieDetails.imgUrl} />
          </Card>
        </Col>
        <Col sm={6}>
          <Card className="e-card e-card-horizontal" style={{ width: '100%', height: '14rem', position: 'relative',  backgroundColor: 'rgba(73, 68, 68, 0.68)', color: 'white' }}>
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
            <CloseButton
              variant="danger"
              onClick={deleteThisMovie}
              className="DetailButton"
              style={{ position: '', top: 0, right: 0 }}
            >
              {/* Delete */}
            </CloseButton>
            <Link href={`/movies/edit/${movieDetails.id}`} passHref>
              <Button variant="outline-warning" className="btn btn-outline-secondary btn-sm">
                Edit
              </Button>
            </Link>
            <Card>
            <Button
              variant="outline-warning"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setShowVideo(!showVideo)}
              style={{ position: '', bottom: '10px', right: '10px' }}
            >
              {showVideo ? 'Hide Trailer' : 'Show Trailer'}
            </Button>
            </Card>
          </Card>
        </Col>
      </Row>
      {showVideo && (
        <div className="mt-3">
          
            <Card style={{ width: '100%' }}>
              <iframe
                src={`${movieDetails.videoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="315"
              />
            </Card>
          
        </div>
      )}
    </div>
  );
}
