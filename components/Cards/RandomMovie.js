/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function RandomCard({ MovieObj }) {
    // Check if MovieObj is defined and has the id property
    if (!MovieObj || typeof MovieObj.id === 'undefined') {
        // Handle the case where MovieObj or id is undefined
        return null; // or you can render a placeholder/error message
    }

    return (
        <div className="random-card" style={{ width: '300px', height: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', color: 'orange'}}>
            {/* Adjust width, height, and shadow according to your preference */}
            <Link href={`/movies/${MovieObj.id}`} passHref>
                <div>
                    <img src={MovieObj.imgUrl} alt={MovieObj.title} style={{ width: '100%', height: '70%' }} />
                    {/* Adjust image size as needed */}
                    <p>{MovieObj.title}</p>
                    <p>{MovieObj.rated}</p>
                    <p>{MovieObj.rating}</p>
                </div>
            </Link>
        </div>
    );
}

RandomCard.propTypes = {
    MovieObj: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        rated: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default RandomCard;
