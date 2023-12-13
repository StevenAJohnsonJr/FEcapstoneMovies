/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function GenreCard({ GenreObj }) {
  return (
    <Card className="genreCard"
      style={{
        width: '232px',
        height: '202px',
        margin: '8px',
        backgroundColor: 'rgba(73, 68, 68, 0.68)',
        color: 'white',
        borderRadius: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}
    >
      <Link href={`/movies/${GenreObj.genreName.toLowerCase()}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Title className="align-self-center text-center fs-4">{GenreObj.genreName}</Card.Title>
        </div>
      </Link>
    </Card>
  );
}

GenreCard.propTypes = {
  GenreObj: PropTypes.shape({
    genreName: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default GenreCard;
