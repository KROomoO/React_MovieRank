import { Link } from "react-router-dom";

const Movies = ({ id, coverimg, title, rating }) => {
    return (
        <Link to={`/movie/${id}`}>
            <div className="movie_card">
                <img src={coverimg} alt={title}></img>
                <h2>
                    {title.length > 15 ? `${title.slice(0, 20)}...` : title}
                </h2>
                <p>
                    <img
                        className="movie_card_rating_img"
                        src={process.env.PUBLIC_URL + `assets/star_16.png`}
                        alt={title}
                    ></img>
                    {rating}
                </p>
            </div>
        </Link>
    );
};

export default Movies;
