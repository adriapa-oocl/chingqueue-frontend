import React from "react";
import {useState} from "react";
import Header from "./Header";
import '../styles/movieSchedule.css';
import { Divider } from "antd";
import MovieScheduleDatePicker from "./MovieScheduleDatePicker";
import AvailableCinema from "./AvailableCinema";
import {AddCinemas,selectCinemasById} from './reducers/CinemaReducer';
import {useDispatch, useSelector} from "react-redux";
import {getCinemasByMovieId} from '../../apis/CinemasApi'
import {useEffect}from "react";
function MovieSchedule(props) {
    
 const dispatch = useDispatch();
 const [cinemasByMovieId, setCinemasByMovieId] = useState([]);

 getCinemasByMovieId(1).then((response) =>{
    dispatch(AddCinemas(response.data));

    setCinemasByMovieId(response.data);
    // console.log(response.data);const cinemasByMovieId = useSelector(selectCinemasById);
})





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
         { cinemasByMovieId.map((cinema)=>(
            
            <AvailableCinema cinema={cinema}></AvailableCinema>

         ))
         }


        </React.Fragment>
    )
}
export default MovieSchedule;