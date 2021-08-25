import React from "react";
import '../styles/reviews.css';
import Review from './Review'

function ReviewList (props) {
    return (
        <div>
            <h2>User Reviews</h2><br/><br/>
            {
                props.reviews.map((review) => (
                    <Review key={review.id} userReview={review}/>
                ))
            }

        </div>
    )
}

export default ReviewList;