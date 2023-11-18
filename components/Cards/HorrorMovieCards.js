/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';



function HorrorCard({ MovieObj }) {

    return (
        <Card style={{
            width: '25rem', height: '25rem', margin: '8px', backgroundColor: '#fff', color: 'black', boxShadow: '3px 3px 4px #9e9e9e', borderRadius: '18px',
        }}
        >
            <Link href={`/charities/${MovieObj.id}`} passHref>
                <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
                    <Card.Img variant="top" src={MovieObj.imgUrl} alt="Movie Img" style={{ width: '6.25rem', height: '6.25rem' }} />
                    <Card.Title className="align-self-center text-center fs-4">
                        {MovieObj.title}
                    </Card.Title>
                </div>
            </Link>
            <hr className="m-3" />
            <Card.Body>
                {MovieObj.rating}
                {MovieObj.rated}
            </Card.Body>
        </Card>
    );
}

HorrorCard.propTypes = {
    MovieObj: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.string,
        rated: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default HorrorCard;