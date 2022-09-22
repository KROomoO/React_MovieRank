import { useState, useEffect } from "react";
import Axios from "axios";

import Movies from "../components/Movies";

const Home = () => {
    const [actionMovies, setActionMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getActionMovies = async () => {
        try {
            const response = await Axios.get(
                "https://yts.mx/api/v2/list_movies.json?limit=5&sort_by=download_count&genre=action"
            );
            setActionMovies(response.data.data.movies);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    const getAnimationMovies = async () => {
        try {
            const response = await Axios.get(
                "https://yts.mx/api/v2/list_movies.json?limit=5&sort_by=download_count&genre=animation"
            );
            setAnimationMovies(response.data.data.movies);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    const getRomanceMovies = async () => {
        try {
            const response = await Axios.get(
                "https://yts.mx/api/v2/list_movies.json?limit=5&sort_by=download_count&genre=romance"
            );
            setRomanceMovies(response.data.data.movies);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getActionMovies();
        getAnimationMovies();
        getRomanceMovies();
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div>
                    <header>
                        <div className="header_title">
                            <h1>
                                <img
                                    className="headimg"
                                    src={
                                        process.env.PUBLIC_URL +
                                        `assets/film-reel_64.png`
                                    }
                                    alt="title_img"
                                ></img>
                                Movie Rank
                            </h1>
                        </div>
                        <h2>
                            누적 다운로드 횟수에 기반한 <br /> 장르별 Best 5
                            영화 정보를 제공합니다.
                        </h2>
                    </header>
                    <div className="rank_wrapper">
                        <h2 className="rank_wrapper_title">Action(액션)</h2>
                        {actionMovies.map((movie) => (
                            <Movies
                                key={movie.id}
                                id={movie.id}
                                coverimg={movie.medium_cover_image}
                                title={movie.title}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                    <div className="rank_wrapper">
                        <h2>Animation(애니메이션)</h2>
                        {animationMovies.map((movie) => (
                            <Movies
                                key={movie.id}
                                id={movie.id}
                                coverimg={movie.medium_cover_image}
                                title={movie.title}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                    <div className="rank_wrapper">
                        <h2>Romance(로맨스)</h2>
                        {romanceMovies.map((movie) => (
                            <Movies
                                key={movie.id}
                                id={movie.id}
                                coverimg={movie.medium_cover_image}
                                title={movie.title}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
