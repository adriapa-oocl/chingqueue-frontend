import React from "react";
import Header from "./Header";
import '../styles/movieDetail.css'
import { Button, Divider } from "antd";
import LeaveReview from "./LeaveReview";

function MovieDetail(){
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
            <img ant="movie 1" className="movie-banner" alt="movie" src="https://i.redd.it/ecpny46kq2l61.jpg"/>
            <div className="trim">
                <h3 style={contentStyle}><img ant="movie 1" className="cover-photo" alt="Movie 1" src="https://dailycollegian.com/wp-content/uploads/2019/09/parasitephoto.jpg"/></h3>
                
                <div className="row">
                    <div class="box boxTransparentTitle">
                        <h1 className="movieName">PARASITE</h1>
                        <h3 className="ratings">Ratings: 5</h3>
                        <h3 className="genre">Genre: TEST</h3>
                    </div>
                    <LeaveReview/><br/><br/>
                    <Button type="primary" className = "button-ViewSchedule">View Schedules</Button>
                </div>
            </div>
            <div className="about-movie">
                <h2>About the Movie</h2>
                <p>The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.</p>
            </div>
            <Divider orientation="left"></Divider>
        </React.Fragment>
    )
}

export default MovieDetail;