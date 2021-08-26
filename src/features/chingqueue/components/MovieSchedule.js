import React from "react";
import Header from "./Header";
import '../styles/movieSchedule.css';
import '../styles/movieDetail.css';
import { Divider } from "antd";
import AvailableCinema from "./AvailableCinema";
import {AddCinemas} from './reducers/CinemaReducer';
import {useDispatch, useSelector} from "react-redux";
import {getCinemasByMovieId} from '../../apis/CinemasApi'
import { selectAllCinemas } from '../components/reducers/CinemaReducer'
import { useLocation } from "react-router-dom";



function MovieSchedule(props) {
 let location = useLocation();
 const dispatch = useDispatch();
 const cinemas = useSelector(selectAllCinemas);
 getCinemasByMovieId(location.state.movie.id).then((response) =>{
    let cinemas = response.data.map((cinema) => 
        ({
            id: cinema.cinemaId,
            cinema_company: cinema.cinemaCompany,
            cinema_location: cinema.cinemaLocation,
            movie_id: cinema.movieId,
            cinema_timeslot_list: cinema.cinemaTimeslotList
        })
    )
    dispatch(AddCinemas(cinemas));
})
const contentStyle = {
        height: '450px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (
        <React.Fragment>
            <Header/>
            <img ant="movie 1" className="movie-banner" alt="movie" src={location.state.movie.movie_img}/>
            <div className="trim">
                <h3 style={contentStyle}><img ant="movie 1" className="cover-photo" alt="Movie 1" src={location.state.movie.movie_img}/></h3>
                <div className="row">
                    <div className="box boxTransparentTitle">
                        <h1 className="movieName">{location.state.movie.movie_name}</h1>
                        <h3 className="genre">Genre: {location.state.movie.genre}</h3>
                    </div>
                </div>
                
            </div>
            <Divider orientation="left">Available Cinema</Divider>
         { 
         cinemas.map((cinema)=>(
            <AvailableCinema key={cinema.id} cinema={cinema}></AvailableCinema>
         ))
         }
        </React.Fragment>
    )
}
export default MovieSchedule;