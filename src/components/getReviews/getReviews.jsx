import './getReviews.css';

import React from 'react';
const GetReviews = ({ review }) => {
  return (
    <figure
      className="listaitem"
      style={
        localStorage.getItem('theme') == 'header-dark'
          ? {
              backgroundColor: '#dc563f',
              color: 'white',
            }
          : {
              backgroundColor: '#488bf4',
              color: 'white',
            }
      }
    >
      <h1
        className="usuario"
        style={
          localStorage.getItem('theme') == 'header-dark'
            ? {
                color: 'white',
              }
            : {
                color: 'white',
              }
        }
      >
        {review.usuario}
      </h1>
      <h3>{review.comentario}</h3>
      <p>Ha dado una valoracion de: {review.valoracion}</p>
    </figure>
  );
};

export default GetReviews;
