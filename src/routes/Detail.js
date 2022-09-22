import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const Detail = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const getMovies = async () => {
        try {
            const response = await Axios.get(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            );
            setMovies(response.data.data.movie);
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = 'Movie Detail';
        getMovies();
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="detail_wrapper">
                    <div className="detail_header">
                        <button className="head_btn_left" onClick={()=>navigate(-1)}>뒤로가기</button>
                        <h1>{movies.title}</h1>
                        <button className="head_btn_right" onClick={() => window.open(movies.url)}>다운로드</button>
                    </div>
                    <img
                        className="detail_coverimg"
                        src={movies.large_cover_image}
                        alt={movies.title}
                    ></img>
                    <dl className="detail_layout">
                        <dt>
                            <b>개봉일</b>
                        </dt>
                        <dd>{movies.year}년</dd>
                    </dl>
                    <dl className="detail_layout">
                        <dt>
                            <b>상영시간</b>
                        </dt>
                        <dd>{movies.runtime}분</dd>
                    </dl>
                    <dl className="detail_layout">
                        <dt>
                            <b>평점</b>
                        </dt>
                        <dd>{movies.rating} 점</dd>
                    </dl>
                    <dl className="detail_layout">
                        <dt>
                            <b>장르</b>
                        </dt>
                        <dd>
                            {movies.genres &&
                                movies.genres.map((it, idx) => (
                                    <li key={idx}>{it}</li>
                                ))}
                        </dd>
                    </dl>
                </div>
            )}
        </>
    );
};

export default Detail;
