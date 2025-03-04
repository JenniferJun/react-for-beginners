 

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, releaseDate, popularity, voteAverage, originalTitle }) {
    return (
        <div className={styles.movie}>
            <img
            src={`https://image.tmdb.org/t/p/w500${coverImg}`}
            alt={title}
            className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3>{originalTitle}</h3>
                <p>{summary}</p>
                <p>Popularity : {popularity}</p>
                <p>Vote Agerage : {voteAverage}</p>
                <p>Release Date:{releaseDate}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    voteAverage: PropTypes.number.isRequired,
    originalTitle: PropTypes.string.isRequired,
  };
  
 
export default Movie;