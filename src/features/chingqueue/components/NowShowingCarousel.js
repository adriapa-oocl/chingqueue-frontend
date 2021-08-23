import { Carousel } from 'antd';
import { Row, Col, Divider } from 'antd';

function NowShowingCarousel(){
    const style = { background: '#0092ff', padding: '8px 0' };

    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  
    return(
      <div>
        <Carousel autoplay>
            <div>
            <h3 style={contentStyle}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 1" className="movie1" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 2"  className="movie2" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 3" className="movie3" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 4" className="movie4" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                </Col>
            </Row>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 1" className="movie1" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 2"  className="movie2" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 3" className="movie3" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 4" className="movie4" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                </Col>
            </Row>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 1" className="movie1" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 2"  className="movie2" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 3" className="movie3" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 4" className="movie4" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                </Col>
            </Row>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 1" className="movie1" src="https://i.pinimg.com/originals/05/f7/ea/05f7ea4755741c023f9e75e3df4b8212.jpg"/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 2"  className="movie2" src="https://i.pinimg.com/564x/c2/4c/d9/c24cd920faacaa8dbaa2cbbafdf83ac9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 3" className="movie3" src="https://i.pinimg.com/564x/b3/42/d6/b342d651598fde2d9cfa8276c0a68df9.jpg" />
                </Col>
                <Col className="gutter-row" span={6}>
                    <img ant="movie 4" className="movie4" src="https://i.pinimg.com/564x/62/ac/c3/62acc3f90f8f0788aab8ecb2fded2558.jpg" />
                </Col>
            </Row>
            </h3>
            </div>
        </Carousel>
      </div>
    );
  }
  export default NowShowingCarousel;