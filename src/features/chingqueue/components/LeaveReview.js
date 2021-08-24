import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import '../styles/leaveReview.css';

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
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        </>
    );
}
export default LeaveReview;