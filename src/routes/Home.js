import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
      const popular_movies_url = 'https://api.themoviedb.org/3/movie/popular?language=ko&page=1&region=KR';
    
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
      
      const getMovies = async () => {
        const json = await (
          await fetch(popular_movies_url, options)
        ).json();
        console.log(json);
        setMovies(json.results);
        setLoading(false);
      };

      getMovies();
    }, []);
  
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg ={movie.poster_path}
                title={movie.title}
                summary={movie.overview}
                genres={movie.genre_ids}
                releaseDate={movie.release_date}
                popularity={movie.popularity}
                voteAverage={movie.vote_average}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

export default Home;