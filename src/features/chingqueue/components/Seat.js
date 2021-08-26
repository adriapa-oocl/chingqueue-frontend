import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { selectCinemaSeatById, UpdateCinemaSeat, selectAllCinemaSeats } from '../components/reducers/CinemaSeatReducer'
import {Col, Popconfirm, Row, message, Modal } from 'antd';
import {updateCinemaSeat} from '../../apis/CinemaSeatsApi'
import "./../styles/CinemaSeats.css"
function Seat(props) {
    const dispatch = useDispatch();
    const seat = useSelector((state) => selectCinemaSeatById(state, props.seatId))
    const allSeats = useSelector(selectAllCinemaSeats)
     const [currSeat, setSeat] = useState(false);
     let mySeat = currSeat ? "selected" : "";
    //  useEffect(() => {

    //     allSeats.filter(seat=>!seat.availability).map(notAvail=>{
    //         setSeat('occupied')
    //         console.log("bat ganon")
    //     })
  
    // }, [])

   

      

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
                  message.success("Seat is successfully reserved.")       
        })
        }else{
            message.error('This seat is already taken');
            mySeat="occupied";
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
                        <div className={`seat ${mySeat}`} onClick={() => setSeat('selected')}>
                        {seat.seat_id}
                </div>
                     
                </Popconfirm>
        
            </span>
        </div>

    )
}

export default Seat
