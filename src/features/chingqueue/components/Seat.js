import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCinemaSeatById, UpdateCinemaSeat } from '../components/reducers/CinemaSeatReducer'
import {message, Popconfirm} from 'antd';
import {updateCinemaSeat} from '../../apis/CinemaSeatsApi'
function Seat(props) {
    const dispatch = useDispatch();
    const seat = useSelector((state) => selectCinemaSeatById(state, props.seatId))

    function handleClick() {
        const seatUpdate = {
            seatId: seat.seat_id, 
            cinemaId: seat.cinema_id, 
            availability: !seat.availability
        }

        console.log(seatUpdate.seatId);

        if(seat.availability===true){
        updateCinemaSeat(seat.seat_id, {updateInfo:seatUpdate}).then(response =>{
                   dispatch(UpdateCinemaSeat({id:seat.id, updateSeat:response.data}))   
                   console.log(response.data);         
        })
        }else{
            console.log("Seat taken");
        }

 
    }


    return (
        <div>
            <span>
                <Popconfirm 
                title="Are you sure to reserve this seat?"
                onConfirm = {handleClick}
                okText="Yes"
                cancelText="No">
                        {seat.id}
                
                </Popconfirm>
        
            </span>
        </div>

    )
}

export default Seat
