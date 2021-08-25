
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/nowShowing.css'

function NowShowing(props){
    return(
      <div>
        <Row gutter={[20, 10]} align="center">
            <Col className="gutter-row" span={3}>
                <Link to={{pathname: "/MovieDetails", state: {movie: props.movie}}}>
                    <img ant={props.key} className="nowShowingMovie" alt="movie" src={props.movie.movie_img}/>
                </Link>
                <Row>
                    <Col>
                    <h3 className="movieTitle">{props.movie.movie_name}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h4 id="genre">Genre</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    );
  }
  export default NowShowing;