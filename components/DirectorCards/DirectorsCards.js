/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function DirectorCard({ dirObj }) {
  return (
    <Card
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
      <Link href={`/directors/${dirObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Title className="align-self-center text-center fs-4">{dirObj.directorName}</Card.Title>
        </div>
      </Link>
    </Card>
  );
}

DirectorCard.propTypes = {
  dirObj: PropTypes.shape({
    directorName: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default DirectorCard;