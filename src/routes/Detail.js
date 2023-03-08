import { useEffect } from "react";
import { json, useParams } from "react-router-dom";
// url 이 변수에를 받을 것을 말해주면 useParams사용해서 변수 값을 넘겨줌


function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    }

    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail !</h1>
};
export default Detail;