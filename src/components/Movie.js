import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

// react router 사용
// : page 전환에 사용
// : npm install react-router-dom
// :  npm install react-router-dom@6