
import { Divider } from 'antd';
import '../styles/nowShowing.css'
import { getAllMovies } from '../../apis/MovieApi'
import { useSelector, useDispatch} from 'react-redux';
import { AddAllMoviesToState, selectAllMovies } from './reducers/MovieReducer'
import NowShowing from './NowShowing'


function NowShowingList(){
    const dispatch = useDispatch()
    getAllMovies().then((response) => {
        const movieList = response.data.map((movie) => 
            (
                {
                    id: movie.movie_id, 
                    movie_name: movie.movie_name,
                    movie_img: movie.movie_img,
                    genre: movie.genre
                }
            )
        )
        dispatch(AddAllMoviesToState(movieList))
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