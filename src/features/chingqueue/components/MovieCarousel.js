import { Carousel } from 'antd';
import '../styles/movieCarousel.css'
import React from 'react';


function MovieCarousel(){
  const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return(
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img ant="movie 1" className="movie1" alt="Movie 1" src="https://i.imgur.com/zzELfqV.jpg%22/%3E"/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 2"  className="movie2" alt="Movie 2" src="https://blog.frame.io/wp-content/uploads/2020/01/parasite_header.jpg" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 3" className="movie3" alt="Movie 3" src="https://i.imgur.com/TSMSr7W.jpg" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 4" className="movie4" alt="Movie 4" src="https://lwlies.com/wp-content/uploads/2016/11/the-wailing.jpg" /></h3>
        </div>
      </Carousel>
    </div>
  );
}
export default MovieCarousel;
