import { List, Divider, Typography, Button } from "antd";
import {useEffect}from "react";
import React from "react";
import '../styles/availableCinema.css';
import {AddCinemas} from './reducers/CinemaReducer';
import {useDispatch} from "react-redux";
import {getCinemasById} from '../../apis/CinemasApi'
function AvailableCinema(props){
    const data = [
        <span className="list-button">         
{
props.cinema.cinemaTimeslotList.map((timeslot)=>(
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
                    <Typography.Text className="cinema-name-location" mark>{props.cinema.cinemaCompany} : {props.cinema.cinemaLocation}</Typography.Text> {item}
                    </List.Item>
                )}
            />
            </div>
        </React.Fragment>
    )
}
export default AvailableCinema;