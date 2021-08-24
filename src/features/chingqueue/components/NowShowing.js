
import { Row, Col } from 'antd';
import '../styles/nowShowing.css'

function NowShowing(props){
    return(
      <div>
        <Row gutter={[20, 48]} align="center">
            <Col className="gutter-row" span={4}>
                <img ant={props.key} className="nowShowingMovie" alt="movie" src={props.movie.movie_img}/>
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