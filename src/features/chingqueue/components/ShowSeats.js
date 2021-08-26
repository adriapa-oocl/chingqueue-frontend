import { Col, Row, message, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getAllCinemaSeatsByCinemaId } from '../../apis/CinemaSeatsApi'
import { AddAllCinemaSeats, selectAllCinemaSeatIds } from '../components/reducers/CinemaSeatReducer'
import Seat from './Seat'
import "./../styles/CinemaSeats.css"

function ShowSeats(props) {
    const dispatch = useDispatch()
    const [currSeat, setSeat] = useState(false);
    const [payment,setPayment] = useState(false);
    const [total,setTotal] = useState(0);

    function success() {
        Modal.success({
          title: 'QR Code payment',
          content: (
            <div>
              {<img id='barcode' src="https://i.imgur.com/x8O8vZG.png" alt="" title="Gcash ni JC" width="270" height="300" /> }
              <br/>
              <span>For further concerns, contact us @ 09151924816</span>
            </div>
          ),
      
        });
      }

      function handleLink() {
        
        success();
      }

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
    let bookFee = 50;
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
                <Col> 

                    <Seat key={id} seatId={id} setTotal = {setTotal} total={total}/> 
       
                    </Col>
                )
                )}
            </Row>
            
          <div className="showcaseSpace">
          <center><div className="screen"><span className="spanScreen">Screen</span></div></center>
            <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div className="seat ant-popover-open"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    </div>
            <Row className="paid"><span className="paidFont">Booking Summary: </span></Row>
            <Row><span className="paidFont">Reservation Fee: {bookFee}</span></Row>
            <Row><span className="paidFont">Total Amount: {total}</span></Row>
           
            

            <center><div className="paymentFont" onClick={handleLink}>Proceed to payment </div></center>
        </div>
    )
}

export default ShowSeats


