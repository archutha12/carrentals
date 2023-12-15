import React, { useState, useRef } from 'react';

const BillGen = () => {
  const [setbill, setSetbill] = useState({});
  const custid = JSON.parse(sessionStorage.getItem('userdata'));
  const cost = useRef();
  const paymenttype = useRef();
  const qp = new URLSearchParams(window.location.search);
  const [driversid, setdriverid] = useState(qp.get('driverid'));
  const homedata = JSON.parse(sessionStorage.getItem('homedata'));
  const cardata = JSON.parse(sessionStorage.getItem('cardata'));
  const duration =
    (Date.parse(homedata.dropingdate) - Date.parse(homedata.pickdate)) /
    (1000 * 60 * 60);
  const driverdata = qp.get('driverid');
  const baseCost = cardata.cost;
  const rentaltypes = (duration) => {
    return duration < 6 ? 'half' : 'full';
  };
  const rentaltype = rentaltypes(duration);

  const calculateRentalCost = (rentalType, duration, baseCost) => {
    const halfDayRate = 0.5;
    const fullDayRate = 1;

    const rate = rentalType === 'half' ? halfDayRate : fullDayRate;
    const rentalCost = baseCost * rate * duration;

    return rentalCost;
  };
  const rentalCost = calculateRentalCost(rentaltype, duration, baseCost);

  const Bill = async () => {
    const booking = {
      Custid: parseInt(custid),
      Driverid: parseInt(driverdata),
      CarNo: cardata.carnum,
      RentalType: rentaltype,
      PickupDate: homedata.pickdate,
      DropDate: homedata.dropingdate,
      PickupLoc: homedata.pickloc,
      DropLoc: homedata.droploc,
      Cost: parseFloat(rentalCost),
      PaymentType: paymenttype.current.value,
    };

    try {
      const response = await fetch(`https://localhost:7273/api/Customerbookcars`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      const userdata = await response.json();
      console.log(userdata);

      if (userdata === 1) {
        console.log('yes');
        setSetbill({ success: 'Booking success' });
      } else {
        console.log('no');
        setSetbill({ error: 'Booking failed. ' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setSetbill({ error: 'Booking failed. An error occurred.' });
    }
  };

  return (
    <div>
      <center>
        <h1>Bill</h1>
      </center>
      <label>Customer id: {custid} </label>
      <br />
      <label>Driver id: {driversid} </label>
      <br />
      <label>Car Number: {cardata.carnum} </label>
      <br />
      <label> pickupdate: {homedata.pickdate}</label> <br />
      <label>Drop Date: {homedata.dropingdate} </label> <br />
      <label> Pickup Location: {homedata.pickloc} </label>
      <br />
      <label>drop location: {homedata.droploc}</label>
      <br />
      <label>Cost: {rentalCost} </label>
      <br />
      <label>Payment Type </label>
      <select ref={paymenttype}>
        <option value="DebitCard">Debit Card</option>
        <option value="CreditCard">Credit Card</option>
      </select>
      <br />

      <input type="button" value="submit" onClick={Bill}></input>
      {setbill.success && <label>{setbill.success}</label>}
      {setbill.error && <label>{setbill.error}</label>}
    </div>
  );
};

export default BillGen;
