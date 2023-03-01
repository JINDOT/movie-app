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

  }
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
    <div >
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
