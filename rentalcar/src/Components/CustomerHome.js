import React, { useRef, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const CustomerHome = () => {
  const pickup = useRef();
  const drop = useRef();
  const pickupdate = useRef();
  const dropdate = useRef();
  const navigate = useNavigate();
   
const details =()=>{
   var homedata ={
    pickloc:pickup.current.value,
    droploc:drop.current.value,
    pickdate:pickupdate.current.value,
    dropingdate:dropdate.current.value,
   }
   sessionStorage.setItem('homedata',JSON.stringify(homedata))
   navigate('/AvailableCarReports')
   const storedData = JSON.parse(sessionStorage.getItem('homedata'));
   console.log(storedData);
}
  const styles = {
    homeContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      marginLeft: '100px',
    },
    formBox: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '500px', // Adjust the width as needed
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    h1: {
      display: 'block',
      marginBottom: '500px',
    },
  };

  
   

    // Replace this with your actual logic or navigation code
    // Link to={`/AvailableCarReports?pickup=${pickupValue}&drop=${dropValue}&date=${bookdateValue}`}

  return (
    <div style={styles.homeContainer}>
      <center>
        <h1 style={styles.h1}>Welcome</h1>
      </center>
      <div style={styles.formBox}>
        <div>
          <br />
          <label style={styles.label}>Pickup Location</label>
          <select style={{ width: '100%' }} ref={pickup}>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="AndhraPradesh">Andhra Pradesh</option>
          </select>
          <br />
          <label style={styles.label}>Drop Location</label>
          <select style={{ width: '100%' }} ref={drop}>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="AndhraPradesh">Andhra Pradesh</option>
          </select>
          <br />
          <label style={styles.label}>Pickup Date and Time</label>
          <input type="date" ref={pickupdate} style={{ width: '100%' }} />
          <br />
          <label style={styles.label}>Drop Date and Time</label>
          <input type="date" ref={dropdate} style={{ width: '100%' }} />
          <button    onClick={details}>Search Cars</button>
            
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
