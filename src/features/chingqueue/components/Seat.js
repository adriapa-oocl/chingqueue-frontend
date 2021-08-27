import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { selectCinemaSeatById, UpdateCinemaSeat } from '../components/reducers/CinemaSeatReducer'
import {Popconfirm, message } from 'antd';
import {updateCinemaSeat} from '../../apis/CinemaSeatsApi'
import "./../styles/CinemaSeats.css"
import { selectAllUser } from '../components/reducers/UserReducer'

function Seat(props) {
    const dispatch = useDispatch();
    const userFromState = useSelector(selectAllUser)  
    const seat = useSelector((state) => selectCinemaSeatById(state, props.seatId))
     const [occupiedSeat,setOccupied] = useState(false);
     
     useEffect(() => {
            if(seat.availability===false){
          setOccupied("occupied");

            }else{
                setOccupied("");
            }

    }, [seat.availability])



    function handleClick() {
        if (userFromState.length === 0) {
            message.error('You must log-in first before being able to reserve!');
        } else {
            const seatUpdate = {
                seatId: seat.seat_id,
                cinemaId: seat.cinema_id,
                availability: !seat.availability
            }

            if(seat.availability===true){
            updateCinemaSeat(seat.seat_id, {updateInfo:seatUpdate}).then(response =>{
                setOccupied("occupied");
                    dispatch(UpdateCinemaSeat({id:seat.id, updateSeat:response.data}))
                    message.success("Seat is successfully reserved.")
                    props.setTotal(props.total+290)


            })
            }else{
                message.error('This seat is already taken');

            }
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
                        <div className={`seat ${occupiedSeat}`}>
                        {seat.seat_id}
                </div>
                </Popconfirm>
            </span>
        </div>

    )
}

export default Seat
