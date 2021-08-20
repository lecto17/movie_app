import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

 function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link 
            to={{
              pathname: `movie/${id}`,
              state: {
                id,
                year,
                title,
                summary,
                poster,
                genres
              }
            }}
        >
            <div className="movie">
                <div className="img-wrapper">
                    <img className="movie__img" src={poster} alt={title} title={title}/>
                </div>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    { genres.map( (genre, index) => (
                        <span key={index} className="genres__genre">{genre}, </span>
                        
                    )) }
                    <h5 className="movie__year">{year}</h5>
                    {/* <ul className="genres">
                        { genres.map( (genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        )) }
                    </ul> */}
                    <p className="movie__summary">{summary.slice(0, 120)}...</p>
                </div>
            </div>
        </Link>
    )
 }

 Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
 }

 export default Movie;