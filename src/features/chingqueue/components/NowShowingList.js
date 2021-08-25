
import { Divider } from 'antd';
import '../styles/nowShowing.css'
import { getAllMovies } from '../../apis/MovieApi'
import { getMovieDetails } from '../../apis/MovieDetailApi'
import { useSelector, useDispatch} from 'react-redux';
import { AddMovieToState, selectAllMovies } from './reducers/MovieReducer'
import NowShowing from './NowShowing'
import { useEffect } from 'react';


function NowShowingList(){
    const dispatch = useDispatch()

    function MapDetailsToMovie(movie) {
        console.log(movie)
        getMovieDetails(movie.movie_id).then((response) => {
            let movieDetail = response.data
                const movieToMap = 
                    {
                        id: movie.movie_id, 
                        movie_name: movie.movie_name,
                        movie_img: movie.movie_img,
                        genre: movieDetail.movieGenre,
                        movie_details_id: movieDetail.movieDetailsId,
                        movie_description: movieDetail.movieDescription
                    }
            dispatch(AddMovieToState(movieToMap))
        })
    }

    useEffect(() => {
        getAllMovies().then((response) => {
            response.data.forEach(function(movie) {
                MapDetailsToMovie(movie)
            })
        })
    })


    const movies = useSelector(selectAllMovies)

    return(
      <div>
            <div>
            <Divider orientation="left"></Divider>
                <h2 className="nowShowing">Now Showing</h2>
                {
                    movies.map((movie) => (
                        <NowShowing key={movie.id} movie={movie}/>
                    ))   
                }
            </div>
      </div>
    );
  }
  export default NowShowingList;