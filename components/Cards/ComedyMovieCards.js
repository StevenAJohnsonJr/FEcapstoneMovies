/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';



function ComedyCard({ MovieObj }) {
    // Check if MovieObj is defined and has the id property
    if (!MovieObj || typeof MovieObj.id === 'undefined') {
        // Handle the case where MovieObj or id is undefined
        return null; // or you can render a placeholder/error message
    }

    return (
        <div className="movie-card">
            <Link href={`/movies/${MovieObj.id}`} passHref>
                <div className="">
                    <img src={MovieObj.imgUrl} alt={MovieObj.title} />
                    <p>{MovieObj.title}</p>
                    <Row>
                        <Col sm={6} style={{ marginRight: '1%' }}>
                            <p>{MovieObj.rated}</p>
                        </Col>
                        <Col sm={6}>
                            <p>{MovieObj.rating}</p>
                        </Col>
                    </Row>
                </div>
            </Link>
        </div>
    );
}


ComedyCard.propTypes = {
    MovieObj: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        rated: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default ComedyCard;