
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/nowShowing.css'

function NowShowing(props){
    return(
            <Col className="gutter-row" span={5}>
                <div className="column-movie">
                    <Link to={{pathname: "/MovieDetails", state: {movie: props.movie}}}>
                        <img ant={props.movie.id} className="nowShowingMovie" alt="movie" src={props.movie.movie_img}/>
                    </Link>
                    <Row>
                        <Col>
                        <h3 className="movieTitle">{props.movie.movie_name}</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <h4 id="genre">{props.movie.genre}</h4>
                        </Col>
                    </Row>
                </div>
            </Col>
    );
  }
  export default NowShowing;