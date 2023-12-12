/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function MovieCard({ MovieObj }) {
    // Check if MovieObj is defined and has the id property
    if (!MovieObj || typeof MovieObj.id === 'undefined') {
        // Handle the case where MovieObj or id is undefined
        return null; // or you can render a placeholder/error message
    }

    return (
        <Link href={`/movies/${MovieObj.id}`} passHref>
            <div className="movie-card">
                <img src={MovieObj.imgUrl} alt={MovieObj.title} />
                <p>{MovieObj.title}</p>
                <p>{MovieObj.rated}</p>
                <p>{MovieObj.rating}</p>
            </div>
        </Link>
    );
}

MovieCard.propTypes = {
    MovieObj: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        rated: PropTypes.string,
        imgUrl: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default MovieCard;

