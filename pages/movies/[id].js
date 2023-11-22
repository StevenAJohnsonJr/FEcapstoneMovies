/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMoviesById } from '../../ApiCalls/MovieApiCalls';
import { Card, Col, Row } from 'react-bootstrap';

export default function movieDetails() {
    const router = useRouter();
    const [movieDetails, setMovieDetails] = useState({});

    // TODO: grab firebaseKey from url
    const { id } = router.query;

    // TODO: make call to API layer to get the data
    useEffect(() => {
        getMoviesById(id).then(setMovieDetails);
        console.warn('my movie', movieDetails);
    }, [id]);

    return (
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="center" src={movieDetails.imgUrl} />
                </Card>
            </div>
            <div id="movieContainer">
                <Card className="e-card e-card-horizontal" style={{ display: 'flex', flexDirection: 'row', width: '100%', heigh: '10rem' }}>
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
                                <Card.Text>Steaming On: {movieDetails.steamingOn}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    {/* <CloseButton id="closeButton" variant="white" onClick={deleteThisCompany} className="m-2">
                        X
                    </CloseButton> */}
                </Card>
            </div>
        </div>
    );
}
