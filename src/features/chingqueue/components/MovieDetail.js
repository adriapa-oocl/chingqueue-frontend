import React from "react";
import Header from "./Header";
import '../styles/movieDetail.css'
import { Button, Divider } from "antd";
import LeaveReview from "./LeaveReview";
import { useLocation } from "react-router-dom";
import { getMovieReviews } from "../../apis/MovieReviewApi";
import { useDispatch, useSelector } from "react-redux";
import { AddAllMovieReviewsToState, selectAllMovieReviews } from "./reducers/MovieReviewsReducer";
import ReviewList from "./ReviewList";
import { getUsers } from '../../apis/UserApi'
import { useHistory } from "react-router-dom";
import { RemoveCinemas } from "./reducers/CinemaReducer";

function MovieDetail(){
    let history = useHistory();
    const dispatch = useDispatch()
    const { state } = useLocation();
    var reviews = useSelector(selectAllMovieReviews)
    const contentStyle = {
        height: '450px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
   
    reviews = reviews.filter((review) => review.movie_details_id === state.movie.movie_details_id)

    getMovieReviews().then((movieReviews) => { 
        getUsers().then((users) => {
            const allUsers = users.data
            let reviewMap = movieReviews.data.map((review) => 
            (
                {
                    id: review.reviewId,
                    movie_details_id: review.movie_details_id,
                    user_id: review.user_id,
                    create_dt: review.create_dt,
                    review_content: review.review_content,
                    user_name: allUsers.find((user) => user.user_id === review.user_id).username
                }
            ))
            dispatch(AddAllMovieReviewsToState(reviewMap))
        })
    })
   
    const goToSchedule =() => {
        dispatch(RemoveCinemas())
        history.push({
            pathname: `/MovieSchedule`,
            state: { movie: state.movie }
          });
        }

    return(
        <React.Fragment>
            <Header/>
            <img ant="movie 1" className="movie-banner" alt="movie" src={state.movie.movie_img}/>
            <div className="trim">
                <h3 style={contentStyle}><img ant="movie 1" className="cover-photo" alt="Movie 1" src={state.movie.movie_img}/></h3>
                
                <div className="row">
                    <div className="box boxTransparentTitle">
                        <h1 className="movieName">{state.movie.movie_name}</h1>
                        <h3 className="genre">Genre: {state.movie.genre}</h3>
                    </div>
                    <LeaveReview movieDetailsId={state.movie.movie_details_id}/><br/><br/>
                    
                    <Button type="primary" className = "button-ViewSchedule" onClick={goToSchedule}>View Schedules</Button>
                </div>
            </div>
            <div className="about-movie">
                <h2>About the Movie</h2>
                <p>{state.movie.movie_description}</p>
            </div>
            <Divider orientation="left"></Divider>
            <ReviewList reviews={reviews}/>
        </React.Fragment>
    )
}

export default MovieDetail;