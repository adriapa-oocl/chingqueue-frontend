import { PageHeader, Descriptions } from 'antd';
import React from 'react';
import "../styles/CinemaSeats.css"

function SeatsDisplay(){

  return (
    <React.Fragment>
      <body className="seatsBody">
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Movie title"
      subTitle="Genre">

      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Location ">Cinema Location</Descriptions.Item>
        <Descriptions.Item label="Reservation Date">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Seats Available">Capacity here</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
  <hr/>
  
  <div class="movie-container">
    </div>

    
    <div class="container">
      <div class="screen"><span className="spanScreen">Screen</span></div>
      <div class="row">
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat selected"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
    </div>
  
    <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>Available</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
</body>
</React.Fragment>
  );
}

export default SeatsDisplay;