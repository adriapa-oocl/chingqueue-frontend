import React from "react";
import Header from "./Header";
import '../styles/movieSchedule.css';
import { Divider } from "antd";
import MovieScheduleDatePicker from "./MovieScheduleDatePicker";
import AvailableCinema from "./AvailableCinema";

function MovieSchedule() {
    return (
        <React.Fragment>
            <Header/>
            <div className="schedule-upper-page">
                <h1>MOVIE TITLE</h1>
                <h4>Genre</h4>
            </div>
            <Divider orientation="left"></Divider>
            <MovieScheduleDatePicker/>
            <Divider orientation="left"></Divider>
            <AvailableCinema/>
        </React.Fragment>
    )
}
export default MovieSchedule;