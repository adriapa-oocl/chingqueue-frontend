import React from 'react';
import { Form, Input, Button } from 'antd';
import { addMovieReview } from '../../apis/MovieReviewApi';
import { AddMovieReviewToState } from '../components/reducers/MovieReviewsReducer'
import { useDispatch} from 'react-redux';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

function MovieReviews(props) {
  const dispatch = useDispatch()

  const validateReview = (reviewDetails) =>{
    let reviewCreds = {movie_details_id: props.movieDetailsId, user_id: props.user[0].id, review_content: reviewDetails.reviewContent};

    addMovieReview(reviewCreds).then((response)=>{
        let review = response.data
        let reviewMap =    
          {
              id: review.reviewId,
              movie_details_id: review.movie_details_id,
              user_id: review.user_id,
              create_dt: review.create_dt,
              review_content: review.review_content,
              user_name: props.user[0].userName
          } 
        dispatch(AddMovieReviewToState(reviewMap))
        props.isReviewModalVisible()
    })

  }

  return (
      <Form {...layout} name="nest-messages" onFinish={validateReview}>
    <h3>What do you think about the movie?</h3>
      <Form.Item name="reviewContent" label="Your review"
        rules={[{
        required:true,
        message:"Please enter your review!"
    }]
    }
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit Rating
        </Button>
      </Form.Item>
    </Form>
  )
}

export default MovieReviews
