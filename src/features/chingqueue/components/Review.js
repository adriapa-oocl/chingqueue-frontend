import { Col } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import '../styles/reviews.css';
import { UserOutlined } from '@ant-design/icons';

function ReviewList (props) {

    return (
        <React.Fragment>
            <Col span={10}>
                <div className = "container semiTransparent">
                    <Avatar className="avatar" icon={<UserOutlined />} />
                    <h3 className="reviewUsername">{props.userReview.user_name}</h3>
                    <p className="review-content">{props.userReview.review_content}</p>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default ReviewList;