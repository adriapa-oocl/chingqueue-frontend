import { Col, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import '../styles/reviews.css';
import { UserOutlined } from '@ant-design/icons';

function Reviews () {
    return (
        <React.Fragment>
            <div className="border">
                <h2 className="review-title">Reviews</h2><br/><br/>
                <Row gutter={[8, 8]} align="center">
                    <Col span={12}>
                        <div class = "container semiTransparent">
                            <Avatar className="avatar" icon={<UserOutlined />} />
                            <h3 className="reviewUsername">userName</h3>
                            <p className="review-content">Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review </p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div class = "container semiTransparent">
                            <Avatar className="avatar" icon={<UserOutlined />} />
                            <h3 className="reviewUsername">userName</h3>
                            <p className="review-content">Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review </p>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div class = "container semiTransparent">
                            <Avatar className="avatar" icon={<UserOutlined />} />
                            <h3 className="reviewUsername">userName</h3>
                            <p className="review-content">Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review </p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div class = "container semiTransparent">
                            <Avatar className="avatar" icon={<UserOutlined />} />
                            <h3 className="reviewUsername">userName</h3>
                            <p className="review-content">Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review </p>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]} align="center">
                    <Col span={12}>
                        <div class = "container semiTransparent">
                            <Avatar className="avatar" icon={<UserOutlined />} />
                            <h3 className="reviewUsername">userName</h3>
                            <p className="review-content">Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review Sample Review </p>
                        </div>
                    </Col>
                    <Col span={12}></Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Reviews;