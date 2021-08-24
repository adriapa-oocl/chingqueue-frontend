import React from "react";
import Header from "./Header";
import '../styles/movieDetail.css'

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
            <div>
                <h3 style={contentStyle}><img ant="movie 1" className="cover-photo" alt="Movie 1" src="https://i.imgur.com/zzELfqV.jpg%22/%3E"/></h3>
            </div>
        </React.Fragment>
    )
}

export default MovieDetail;