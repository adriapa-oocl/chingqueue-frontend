import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';
import '../styles/leaveReview.css';
import MovieReviews from './MovieReviews'
import { useSelector } from 'react-redux'
import { selectAllUser } from '../components/reducers/UserReducer'

function LeaveReview(props) {
    const userFromState = useSelector(selectAllUser)  
    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal () {
        if (userFromState.length === 0) {
            message.error('You must log-in first before being able to review!');
        } else {
            setIsModalVisible(true);
        }
    }


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log(props);

    return (
        <>
        <Button type="primary" className = "button-LeaveReview" onClick={showModal}>
            Leave a review
        </Button>
        <Modal title="Leave a review" visible={isModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}>
            <MovieReviews movieDetailsId={props.movieDetailsId} userId={userFromState} isReviewModalVisible={setIsModalVisible}/>
        </Modal>
        </>
    );
}
export default LeaveReview;