import './Review.css';

import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import GetReviews from '../../components/getReviews/getReviews';
import { UserContext } from '../../context/UserContext';

const Review = () => {
  const { user } = useContext(UserContext);
  const inputRev = useRef(null);
  const inputVal = useRef(null);
  let comentario = '';
  let valoracion = '';
  const reviewss = [
    {
      usuario: 'Juan',
      comentario: 'Increible web una de las mejores que he visto ',
      valoracion: '9',
    },
    {
      usuario: 'Hater',
      comentario:
        'menuda basura de app que tengas que pagar para tener mas mazos es una verguenza',
      valoracion: '1',
    },
    {
      usuario: 'Mclovin',
      comentario: 'muy buena pagina me ha encantado',
      valoracion: '10',
    },
  ];
  const [reviews, setReviews] = useState([
    {
      usuario: 'Juan',
      comentario: 'Increible web una de las mejores que he visto ',
      valoracion: '9',
    },
    {
      usuario: 'Hater',
      comentario:
        'menuda basura de app que tengas que pagar para tener mas mazos es una verguenza',
      valoracion: '1',
    },
    {
      usuario: 'Mclovin',
      comentario: 'muy buena pagina me ha encantado',
      valoracion: '10',
    },
  ]);
  const getRreviews = () => {
    const reviews2 = reviewss;
    setReviews(reviews2);
  };
  useEffect(() => {
    getRreviews();
  }, []);
  const navigate = useNavigate();
  return (
    <main className="main-review">
      <div
        className="formularioReview"
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
        <h1>
          {' '}
          <FormattedMessage id="review.1" /> {user}
        </h1>
        <h1>
          <FormattedMessage id="review.2" />
        </h1>
        <input
          type="text"
          ref={inputRev}
          placeholder="Leave your comment"
          maxLength={30}
          className="inputreview"
          style={
            localStorage.getItem('theme') == 'header-dark'
              ? {
                  backgroundColor: 'white',
                  color: 'black',
                }
              : {
                  backgroundColor: 'white',
                  color: 'black',
                }
          }
        />
        <div className="filaval">
          {' '}
          <h1>
            <FormattedMessage id="review.3" />
          </h1>
          <input
            type={'number'}
            min={1}
            max={10}
            ref={inputVal}
            style={
              localStorage.getItem('theme') == 'header-dark'
                ? {
                    backgroundColor: 'white',
                    color: 'black',
                  }
                : {
                    backgroundColor: 'white',
                    color: 'black',
                  }
            }
          />
        </div>
        <button
          className="bg-blue-500 border border-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded"
          onClick={() => {
            if (
              inputRev.current.value !== '' ||
              (inputVal.current.value > 1 && inputVal.current.value < 11)
            ) {
              comentario = inputRev.current.value;
              valoracion = inputVal.current.value;
              reviewss.push({
                usuario: user,
                comentario: comentario,
                valoracion: valoracion,
              });
              setReviews(reviewss);
            }

            navigate('/review');
          }}
        >
          <FormattedMessage id="review.4" />
        </button>
      </div>
      <div className="listacomentarios">
        {reviews.map((review) => (
          <GetReviews review={review} key={review.usuario} />
        ))}
      </div>
    </main>
  );
};

export default Review;
