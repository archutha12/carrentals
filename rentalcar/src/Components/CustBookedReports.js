import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CustBookedReports = () => {
  const [GetCustBookedReports, SetCustBookedReports] = useState([]);
  const qp = new URLSearchParams(window.location.search);
  const custid = JSON.parse(sessionStorage.getItem('userdata'));
  const userdata = parseInt(custid)
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const url = `https://localhost:7273/api/custbookedcarsreports/${userdata}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.$values);
      SetCustBookedReports(data.$values || []); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label> Customer ID</label>
      <input type="text" defaultValue={custid}  className="form-control" readOnly />

      <div className="row">
        <h4>Your Rides</h4>
        <table border="1">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer ID</th>
              <th>Driver ID</th>
              <th>Car Number</th>
              <th>Rental Type</th>
              <th>Pickup Date</th>
              <th>Drop Date</th>
              <th>Pickup Location</th>
              <th>Drop Location</th>
              <th>Cost</th>
              <th>Payment Type</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {GetCustBookedReports.map((booking, index) => (
              <tr key={index}>
                <td>{booking.bookingid}</td>
                <td>{booking.custid}</td>
                <td>{booking.driverid}</td>
                <td>{booking.carNo}</td>
                <td>{booking.rentalType}</td>
                <td>{booking.pickupDate}</td>
                <td>{booking.dropDate}</td>
                <td>{booking.pickupLoc}</td>
                <td>{booking.dropLoc}</td>
                <td>{booking.cost}</td>
                <td>{booking.paymentType}</td>
                <td><Link to={`/EditRide?rentalType=' + ${booking.rentalType} + '&pickupDate=' + ${booking.pickupDate} + '&dropDate=' + ${booking.dropDate} + '&pickupLoc=' + ${booking.pickupLoc} + '&dropLoc=' + ${booking.dropLoc} `} className="btn btn-info">Edit Ride</Link></td>
                <td><Link to={`/CancelRide?bid='+ ${booking.bookingid}`} className="btn btn-info">Cancel</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustBookedReports;
