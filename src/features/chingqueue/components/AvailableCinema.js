import { List, Divider, Typography, Button, Modal, Row, Col } from "antd";
import React, { useState } from "react";
import '../styles/availableCinema.css';
import Payment from "./Payment";
import SeatsDisplay from "./Seats";

function AvailableCinema(){

    const [visible, setVisible] = useState(false);
    const data = [
        <span className="list-button">


        <>
        <Modal
        title="Select seats"
        centered
        visible={visible}

        onOk={() => 
        {
            setVisible(false)
        }
    }
        onCancel={() => setVisible(false)}
        width={1000}>
        
        <Row gutter={[8, 8]}>
        <Col span={12} ><SeatsDisplay/></Col>
        <Col span={12} ><Payment/></Col>
        </Row>

      </Modal>
    </>


            <Button className="button-time-slot" onClick={() => setVisible(true)}>10:00 AM</Button>
            <Button className="button-time-slot" onClick={() => setVisible(true)}>12:30 PM</Button>
            <Button className="button-time-slot" onClick={() => setVisible(true)}>2:00 PM</Button>
        </span>,
        <span className="list-button">
            <Button className="button-time-slot">10:00 AM</Button>
            <Button className="button-time-slot">12:30 PM</Button>
            <Button className="button-time-slot">2:00 PM</Button>
        </span>,
      ];
    return(
        <React.Fragment>
            <div className="available-cinema">
            <Divider orientation="left"> Available Cinema's </Divider>
            <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                    <Typography.Text className="cinema-name-location" mark>[Cinema name: Location]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            </div>
        </React.Fragment>
    )
}
export default AvailableCinema;