import React from "react";
import Header from "./Header";
import '../styles/movieDetail.css'
import { Button, Divider } from "antd";
import LeaveReview from "./LeaveReview";
import Reviews from "./Reviews";
import { Link, useLocation } from "react-router-dom";


function MovieDetail(){
    const { state } = useLocation();

    const contentStyle = {
        height: '450px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return(
        <React.Fragment>
            <Header/>
            <img ant="movie 1" className="movie-banner" alt="movie" src={state.movie.movie_img}/>
            <div className="trim">
                <h3 style={contentStyle}><img ant="movie 1" className="cover-photo" alt="Movie 1" src={state.movie.movie_img}/></h3>
                
                <div className="row">
                    <div class="box boxTransparentTitle">
                        <h1 className="movieName">{state.movie.movie_name}</h1>
                        <h3 className="genre">Genre: {state.movie.genre}</h3>
                    </div>
                    <LeaveReview/><br/><br/>
                    <Link to ="/MovieSchedule"><Button type="primary" className = "button-ViewSchedule">View Schedules</Button></Link>
                </div>
            </div>
            <div className="about-movie">
                <h2>About the Movie</h2>
                <p>{state.movie.movie_description}</p>
            </div>
            <Divider orientation="left"></Divider>
            <Reviews/>
        </React.Fragment>
    )
}

export default MovieDetail;