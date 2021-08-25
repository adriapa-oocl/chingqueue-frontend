import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCinemaSeatsByCinemaId } from '../../apis/CinemaSeatsApi'
import { AddAllCinemaSeats, selectAllCinemaSeatIds } from '../components/reducers/CinemaSeatReducer'
import Seat from './Seat'
import { useLocation } from "react-router-dom";

function ShowSeats(props) {
    const dispatch = useDispatch()
    
    getAllCinemaSeatsByCinemaId(props.cinemaId).then((response) => {
        let cinemaSeats = response.data.map((cinemaSeats) => 
        ({
            id: cinemaSeats.cinemaSeatPk,
            seat_id: cinemaSeats.seatId,
            cinema_id: cinemaSeats.cinemaId,
            availability: cinemaSeats.availability,
        })
    )
        dispatch(AddAllCinemaSeats(cinemaSeats))
    })

    const seats = useSelector(selectAllCinemaSeatIds)
    console.log(seats)
    return (
        <div>
            {
                seats.map((id) => 
                (
                    <Seat key={id} seatId={id}/>
                )
                )}
        </div>
    )
}

export default ShowSeats
