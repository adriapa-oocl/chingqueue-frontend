import { PageHeader, Descriptions } from 'antd';
import React, { useState } from 'react';
import "../styles/CinemaSeats.css"

function SeatsDisplay(){
  const [currentSeat, setSeat] = useState(false);

  return (
    <React.Fragment>
      <body className="seatsBody">
 
  <hr/>

  <div className="movie-container">
    </div>

    
    <div className="seatscontainer">
      <div className="screen"><span className="spanScreen">Screen</span></div>
      <div className="seatrow">
        <div className={`seat ${currentSeat ? "selected" : ""}`} onClick={() => setSeat('selected')}></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
    </div>
  
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
</body>
</React.Fragment>
  );
}

export default SeatsDisplay;