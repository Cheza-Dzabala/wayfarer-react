import React from 'react'
import placeholder from './../assets/images/max-bender-VmX3vmBecFE-unsplash.jpg';

export default function Trips() {
  return (
    <div className="trip">
      <a href="./trip_details.html" className="card">
        <img src={placeholder} alt="placeholder" />
        <div className="details">
          <p><strong>Origin: </strong>Lilongwe, MW</p>
          <p><strong>Destination: </strong>Chitipa, MW</p>
          <p><strong>Departure: </strong>08:00am</p>
          <p><strong>ETA: </strong>17:00pm</p>
          <p><strong>Date: </strong>MM/DD/YYYY</p>
        </div>
      </a>
    </div>
  )
}
