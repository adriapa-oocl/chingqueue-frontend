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

function MovieSchedule(props) {
    
 const dispatch = useDispatch();

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
const cinemas = useSelector(selectAllCinemas)

    return (
        <React.Fragment>
            <Header/>
            <div className="schedule-upper-page">
                <h1>Parasite</h1>
                <h4>Thriller</h4>
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