import { Col, Popconfirm, Row, message, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCinemaSeatsByCinemaId } from '../../apis/CinemaSeatsApi'
import { AddAllCinemaSeats, selectAllCinemaSeatIds } from '../components/reducers/CinemaSeatReducer'
import Seat from './Seat'
import "./../styles/CinemaSeats.css"

function ShowSeats(props) {
    const dispatch = useDispatch()
    const [currSeat, setSeat] = useState(false);
    const text = "Are you sure you want this seat?";
    
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

    const [isModalVisible] = useState(false);
    let mySeat = currSeat ? "selected" : "";
    let ticketPrice = 240;
    let bookFee = 49;
    let total = 0;
    let selectedSeat = 0;
    if (mySeat === "selected") {
        selectedSeat = selectedSeat + 1;
        total = ticketPrice + total + bookFee;
    }
    
    function confirm() {
        
        success();
      }

      function success() {
        Modal.success({
          title: 'QR Code payment',
          content: (
            <div>
              <img id='barcode' src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="HELLO" width="250" height="250" />
            </div>
          ),
          onOk() {
            message.info('You have successfully reserved this seat');
          },
        });
      }
      
    const seats = useSelector(selectAllCinemaSeatIds)
    console.log(seats)
    return (
        <div className="seatssContainer">
            <Modal title="QR Payment" visible={isModalVisible}>
            </Modal>
          
            <Row>
            {
                seats.map((id) => 
                (
                <Popconfirm placement="top" onConfirm={confirm} title={text}> <Col> <div className={`seat ${mySeat}`} onClick={() => setSeat('selected')}><Seat key={id} seatId={id}/> </div></Col> </Popconfirm>
                )
                )}
            </Row>
            <Row className="paid"><span className="paidFont">Booking Summary: </span></Row>
            <Row className="paid"><span className="paidFont">Selected Seats: {selectedSeat}</span> </Row>
            <Row><span className="paidFont">Reservation Fee: {bookFee}</span></Row>
            <Row><span className="paidFont">Total Amount: {total}</span></Row>
           
        </div>
    )
}

export default ShowSeats
