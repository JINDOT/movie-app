import { useEffect, useState, useSyncExternalStore } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // then 다른 방법
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  /*
  useEffect(() => {
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    ).then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies)
        setLoading(false);
      })
  }, []);
*/
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) :
        (
          <div>
            {movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default App;
/* 역시 code는 무작정 따라쓰지 않고, 뭔지 알고 써야한다.*/
/* map() : 반복되는 component를 랜더링하기 위해 사용 */