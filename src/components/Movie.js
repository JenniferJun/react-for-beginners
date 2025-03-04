 

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres, releaseDate, popularity, voteAverage }) {
    return (
         <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <img
            src={`https://image.tmdb.org/t/p/w500${coverImg}`}
            alt={title}
            style={{ width: "200px", borderRadius: "10px" }}
            />
            <p>{popularity}</p>
            <p>{voteAverage}</p>
            <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
            <p>{releaseDate}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    releaseDate: PropTypes.string.isRequired,
    popularity: PropTypes.string.isRequired,
    voteAverage: PropTypes.string.isRequired,
  };
  
 
export default Movie;