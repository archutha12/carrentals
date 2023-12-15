import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookedDriverReports = () => {
  const [GetBookedDrivers, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const qp = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://localhost:7273/api/unavailableDrivers';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.$values);
      setdata(data.$values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Booked Drivers</h1>
      <div className="row">
        {GetBookedDrivers.map((Driver, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">Driverid: {Driver.driverid}</p>
                <p className="card-text">Name: {Driver.name}</p>
                <p className="card-text">DateOfBirth: {Driver.dateOfBirth}</p>
                <p className="card-text">Phoneno: {Driver.phoneno}</p>
                <p className="card-text">Address: {Driver.address}</p>
                <p className="card-text">Licenseno: {Driver.licenseno}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedDriverReports;
