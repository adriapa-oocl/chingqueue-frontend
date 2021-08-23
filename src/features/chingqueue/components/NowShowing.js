
import { Row, Col, Divider } from 'antd';
import '../styles/nowShowing.css'

function NowShowingCarousel(){
   
  
    return(
      <div>
        
            <div>
            <Divider orientation="left"></Divider>
            <h2 className="nowShowing">Now Showing</h2>
 
            <Row gutter={[20, 48]} align="center">
                <Col className="gutter-row" span={4}>
                    <img ant="movie 1" className="nowShowingMovie" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 2"  className="nowShowingMovie" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 3" className="nowShowingMovie" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 4" className="nowShowingMovie" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[20, 48]} align="center">
                <Col className="gutter-row" span={4}>
                    <img ant="movie 1" className="nowShowingMovie" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 2"  className="nowShowingMovie" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 3" className="nowShowingMovie" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col> 
                        <h4 id="genre">Genre</h4>
                        </Col>
                    </Row>
                </Col>
                <Col className="gutter-row" span={4}>
                    <img ant="movie 4" className="nowShowingMovie" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                    <Row>
                        <Col>
                        <h3 className="movieTitle">movieTitle</h3>
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
            
        
      </div>
    );
  }
  export default NowShowingCarousel;