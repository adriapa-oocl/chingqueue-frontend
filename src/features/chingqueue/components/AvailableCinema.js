import { List, Typography, Button, Modal } from "antd";
import React from "react";
import {useState} from "react";
import '../styles/availableCinema.css';
import ShowSeats from "./ShowSeats";

function AvailableCinema(props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleCancel = () => {
        setIsModalVisible(false);
      };

      const showModal = () => {
        setIsModalVisible(true);
      };
    const data = [
        <span className="list-button"onClick={showModal}>         
        { 
            props.cinema.cinema_timeslot_list.map((timeslot)=>(
                // <Link to={{pathname: "/ShowSeats", state: {cinemaId: props.cinema.id}}}><Button className="button-time-slot">{timeslot}</Button></Link>
                <Button className="button-time-slot" >{timeslot}</Button>
            ))
        }
        </span>
      ];

    return(
        <React.Fragment>
            <div className="available-cinema">
           {/* { <Divider orientation="left"> Available Cinemas </Divider>} */}
           {  console.log(props.cinema.cinema_timeslot_list)}
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