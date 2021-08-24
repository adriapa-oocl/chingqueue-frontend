import { List, Divider, Typography, Button } from "antd";
import React from "react";
import '../styles/availableCinema.css';

function AvailableCinema(){
    const data = [
        <span className="list-button">
            <Button className="button-time-slot">10:00 AM</Button>
            <Button className="button-time-slot">12:30 PM</Button>
            <Button className="button-time-slot">2:00 PM</Button>
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