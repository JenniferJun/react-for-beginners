import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWE1NWM2MWFlNzA2OTUwYzE3NjQ5ZDIxMWNkMjczMiIsIm5iZiI6MTc0MDk3OTE0Mi4xNTIsInN1YiI6IjY3YzUzYmM2NTY0ZDI1NzVkOTkxZWUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boEEWEKtahlZdQAdgDEYpF5v3Xg1rU3_llGj2Ex2Q6k"
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
  
    useEffect(() => {
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