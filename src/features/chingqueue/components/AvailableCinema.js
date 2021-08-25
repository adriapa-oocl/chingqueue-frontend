import { List, Typography, Button } from "antd";
import React from "react";
import '../styles/availableCinema.css';

function AvailableCinema(props){
    const data = [
        <span className="list-button">         
        {
            props.cinema.cinema_timeslot_list.map((timeslot)=>(
                <Button className="button-time-slot">{timeslot}</Button>
            ))
        }
        </span>
      ];

    return(
        <React.Fragment>
            <div className="available-cinema">
           {/* { <Divider orientation="left"> Available Cinemas </Divider>} */}
            <List
                bordered
                 dataSource={data}
                renderItem={item => (
                    <List.Item>
                    <Typography.Text className="cinema-name-location" mark>{props.cinema.cinema_company} : {props.cinema.cinema_location}</Typography.Text> {item}
                    </List.Item>
                )}
            />
            </div>
        </React.Fragment>
    )
}
export default AvailableCinema;