import { Row } from "antd";
import React from "react";
import '../styles/reviews.css';
import Review from './Review'

function ReviewList (props) {
    return (
        <div>
            <h2>User Reviews</h2><br/><br/>
            <div className="border">
                <Row gutter={[8, 8]} align="center">
                {
                    props.reviews.map((review) => (
                        <Review key={review.id} userReview={review}/>
                    ))
                }
                </Row>
            </div>
        </div>
    )
}

export default ReviewList;