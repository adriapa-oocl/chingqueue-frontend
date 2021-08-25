import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import '../styles/leaveReview.css';
import MovieReviews from './MovieReviews'

function LeaveReview() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
        <Button type="primary" className = "button-LeaveReview" onClick={showModal}>
            Leave a review
        </Button>
        <Modal title="Leave a review" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <MovieReviews/>
        </Modal>
        </>
    );
}
export default LeaveReview;