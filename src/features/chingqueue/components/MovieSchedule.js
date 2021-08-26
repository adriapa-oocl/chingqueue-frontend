import React from "react";
import Header from "./Header";
import '../styles/movieSchedule.css';
import { Divider } from "antd";
import MovieScheduleDatePicker from "./MovieScheduleDatePicker";
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
 getCinemasByMovieId(1).then((response) =>{
    let cinemas = response.data.map((cinema) => 
        ({
            id: cinema.cinemaId,
            cinema_company: cinema.cinemaCompany,
            cinema_location: cinema.cinemaLocation,
            movie_id: cinema.movieId,
            cinema_timeslot_list: [cinema.cinemaTimeslotList]
        })
    )
    dispatch(AddCinemas(cinemas));
})


console.log('location:', location)



    return (
        <React.Fragment>
            <Header/>
            <div className="schedule-upper-page">
                <p>{location.state.movie.movie_name}</p>
                <p>{location.state.movie.genre}</p>
            </div>
            <Divider orientation="left"></Divider>
            <MovieScheduleDatePicker/>
            <Divider orientation="left"></Divider>
         { 
         cinemas.map((cinema)=>(
            <AvailableCinema key={cinema.id} cinema={cinema}></AvailableCinema>
         ))
         }
        </React.Fragment>
    )
}
export default MovieSchedule;