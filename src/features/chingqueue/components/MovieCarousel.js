import { Carousel } from 'antd';

function MovieCarousel(){
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return(
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img ant="movie 1" className="movie 1" src="https://imgur.com/BrBTVm4"/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 2"  className="movie 2" src="https://imgur.com/jlhAfvV" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 3" className="movie 3" src="https://imgur.com/4bPYKwS" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img ant="movie 4" className="movie 4" src="https://imgur.com/qeaFAO7" /></h3>
        </div>
      </Carousel>
    </div>
  );
}
export default MovieCarousel;
