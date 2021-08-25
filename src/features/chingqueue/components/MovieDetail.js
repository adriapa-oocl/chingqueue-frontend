import React, {useState} from "react";
import Header from "./Header";
import { useDispatch, useSelector} from 'react-redux'
import { useEffect} from "react"
import '../styles/movieDetail.css'
import {getMovieDetails} from '../../apis/MovieDetailApi'
import {addMovieDetails, selectByMovieId, selectMovieIds} from '../components/reducers/MovieDetailReducers'
import {} from '../components/reducers/MovieDetailReducers'




function MovieDetail(){
  
   const dispatch = useDispatch();
            useEffect(() => {
                getMovieDetails(21).then((response) => {
                const responseData = response.data
                const movieDetailsMap = {id:responseData.movieDetailsId, 
                    movieId:responseData.movieId, 
                    movieDescription:responseData.movieDescription, 
                    movieGenre:responseData.movieGenre};

                console.log('dispatch', response.data)
                dispatch(addMovieDetails(movieDetailsMap))
                })       
            }, [dispatch])
     
           
        
    
    // const movieDescription1 = useSelector(selectMovieIds);
    const movieDesc = useSelector((state) => selectByMovieId(state, 1));
    console.log(movieDesc);
    return(
        <React.Fragment>
            <Header/>
            <div>
                <img ant="movie 1" className="cover-photo" alt="Movie 1" src="https://i.imgur.com/zzELfqV.jpg%22/%3E"/>
            </div>
            <div>
                 <p>{movieDesc.movieDescription}</p> 
            </div>
        </React.Fragment>
    )
}

export default MovieDetail;