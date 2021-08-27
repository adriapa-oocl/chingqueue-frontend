import { List, Typography, Button, Modal } from "antd";
import React from "react";
import {useState} from "react";
import '../styles/availableCinema.css';
import ShowSeats from "./ShowSeats";
import { useDispatch } from 'react-redux'
import { RemoveAllCinemaSeats } from '../components/reducers/CinemaSeatReducer'

function AvailableCinema(props){
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleCancel = () => {
        setIsModalVisible(false);
      };

      const showModal = () => {
        dispatch(RemoveAllCinemaSeats())
        setIsModalVisible(true);
      };
    const data = [
        <span className="list-button"onClick={showModal}>
        {
            props.cinema.cinema_timeslot_list.map((timeslot)=>(
                <Button className="button-time-slot" onClick={showModal}>{timeslot}</Button>
            ))
        }
        </span>
      ];

    return(
        <React.Fragment>
            <div className="available-cinema">

            <List
                bordered
                 dataSource={data}
                renderItem={item => (
                    <List.Item>
                    <Typography.Text
                        className="cinema-name-location" mark>
                        {props.cinema.cinema_company} : {props.cinema.cinema_location}
                    </Typography.Text> {item}
                    </List.Item>
                )}
            />
            <Modal title="Reserve a seat" visible={isModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }} destroyOnClose={true}>
                <ShowSeats cinemaId={props.cinema.id}/>
            </Modal>
            </div>
        </React.Fragment>
    )
}
export default AvailableCinema;