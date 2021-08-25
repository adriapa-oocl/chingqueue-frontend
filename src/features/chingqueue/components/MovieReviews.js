import React from 'react';
import { Form, Input, Button } from 'antd';
import { addMovieReview } from '../../apis/MovieReviewApi';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

function MovieReviews(props) {

  const validateReview = (reviewDetails) =>{
    let reviewCreds = {movie_details_id: 1, user_id: 1, review_content: reviewDetails.reviewContent};
    
    addMovieReview(reviewCreds).then((response)=>{
    console.log(response.data);
    }).catch(()=>{
      onFinish();
    })

  }

    const onFinish = (values) => {
        console.log(values);
      };
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
