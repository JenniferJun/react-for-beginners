import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
 
function Detail(){
  const { id } = useParams();
    const [movie, setMovies] = useState({});
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    useEffect(() => {
        const movi_detail_url = `https://api.themoviedb.org/3/movie/${id}?language=ko&page=1&region=KR`;
    
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
          }
        };    
        const getMovies = async () => {      const json = await (
          await fetch(movi_detail_url, options)
        ).json();
        console.log(json);
        setMovies(json); 
      };

      getMovies();
    }, []);

    return (
        <div>
        <h2>{movie.title}</h2>
        <h3>{movie.original_title}</h3>
        <p>{movie.overview}</p>
        <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "200px", borderRadius: "10px" }}
        />
        <p>{movie.popularity}</p>
        <p>{movie.vote_average}</p>
        <p>
          {Array.isArray(movie.genres) ? movie.genres.map((genre) => genre.name).join(", ") : ""}
        </p>
 
        <p>{movie.release_date}</p>

        <h2>
                <Link to={`/movies`}>List</Link>
        </h2>
    </div>
    )
}

export default Detail;