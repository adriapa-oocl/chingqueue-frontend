import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCinemaSeatById, UpdateCinemaSeat } from '../components/reducers/CinemaSeatReducer'

function Seat(props) {
    const dispatch = useDispatch();
    const seat = useSelector((state) => selectCinemaSeatById(state, props.seatId))

    function handleClick() {
        const seatUpdate = {
            id: seat.id, 
            seat_id: seat.seat_id, 
            cinema_id: seat.cinema_id, 
            availability: !seat.availability
        }
        dispatch(UpdateCinemaSeat(seatUpdate))
    }

    return (
        <div>
            <span onClick={handleClick}>
                {seat.id}
            </span>
        </div>

    )
}

export default Seat
